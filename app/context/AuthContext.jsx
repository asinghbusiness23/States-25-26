"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  // Sign up
  const signUpNewUser = async (email, password, firstName, lastName) => {
    const { data, error } = await supabase.auth.signUp({
      email: email.toLowerCase(),
      password: password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    });

    if (error) {
      console.error("Error signing up: ", error);
      return { success: false, error };
    }

    return { success: true, data };
  };

  // Sign in
  const signInUser = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.toLowerCase(),
        password: password,
      });

      // Handle Supabase error explicitly
      if (error) {
        console.error("Sign-in error:", error.message); // Log the error for debugging
        return { success: false, error: error.message }; // Return the error
      }
      const user = data.user;

      // 🔥 WAIT for profile here
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .maybeSingle();

      if (profileError) {
        return { success: false, error: profileError.message };
      }

      // Set state immediately
      setSession(data.session);
      setProfile(profileData);

      // If no error, return success
      console.log("Sign-in success:", data);
      return { success: true, data }; // Return the user data
    } catch (error) {
      // Handle unexpected issues
      console.error("Unexpected error during sign-in:", err.message);
      return {
        success: false,
        error: "An unexpected error occurred. Please try again.",
      };
    }
  };
  useEffect(() => {
    let mounted = true;
    // const fetchSessionAndProfile = () => {
    //   const {
    //     data: { session },
    //   } = setTimeout(() => {
    //     supabase.auth.getSession();

    //     if (!mounted) return;

    //     setSession(session);

    //     if (session?.user) {
    //       const { data } = supabase
    //         .from("profiles")
    //         .select("role")
    //         .eq("id", session.user.id)
    //         .single();

    //       if (mounted) setProfile(data);
    //     }
    //   });
    //   console.log("first func running");
    //   setLoading(false);
    // };

    const fetchSessionAndProfile = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!mounted) return;

      setSession(session);

      if (session?.user) {
        const { data } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", session.user.id)
          .maybeSingle();

        if (mounted) setProfile(data);
      }
      setLoading(false);
    };

    fetchSessionAndProfile();

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (!mounted) return;

        setTimeout(() => {
          setSession(session);
          if (session?.user) {
            const { data } = supabase
              .from("profiles")
              .select("role")
              .eq("id", session.user.id)
              .single();

            setProfile(data);
            // console.log("setting profile not null");
            // console.log(data);
          } else {
            // console.log("setting profile null");
            // setProfile(null);
          }
        });
        // console.log(profile);
        setLoading(false);
      },
    );

    // const { data: listener } = supabase.auth.onAuthStateChange(
    //   async (_event, session) => {
    //     if (!mounted) return;

    //     setSession(session);

    //     if (session?.user) {
    //       const { data } = await supabase
    //         .from("profiles")
    //         .select("role")
    //         .eq("id", session.user.id)
    //         .maybeSingle();

    //       setProfile(data);
    //       console.log(profile)
    //     } else {
    //       setProfile(null);
    //     }

    //     setLoading(false);
    //   },
    // );

    return () => {
      mounted = false;
      listener.subscription.unsubscribe(); // 🔥 THIS LINE FIXES WEIRD TAB ISSUES
    };
  }, []);
  // useEffect(() => {
  //   const fetchSessionAndProfile = async () => {
  //     const {
  //       data: { session },
  //     } = await supabase.auth.getSession();
  //     setSession(session);

  //     if (session?.user) {
  //       const { data } = await supabase
  //         .from("profiles")
  //         .select("role")
  //         .eq("id", session.user.id)
  //         .single();

  //       setProfile(data);
  //     }

  //     setLoading(false);
  //   };

  //   fetchSessionAndProfile();

  //   supabase.auth.onAuthStateChange(async (_event, session) => {
  //     setSession(session);

  //     if (session?.user) {
  //       const { data } = await supabase
  //         .from("profiles")
  //         .select("role")
  //         .eq("id", session.user.id)
  //         .single();

  //       setProfile(data);
  //     } else {
  //       setProfile(null);
  //     }

  //     setLoading(false);
  //   });
  // }, []);

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setLoading(false);
  //     setSession(session);
  //     console.log(loading);
  //   });

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setLoading(false);
  //     setSession(session);
  //     console.log(loading);
  //   });
  // }, []);

  // useEffect(() => {
  //   // console.log("loading changed:", loading);
  // }, [loading]);

  // Sign out
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{ signUpNewUser, signInUser, session, signOut, loading, profile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
