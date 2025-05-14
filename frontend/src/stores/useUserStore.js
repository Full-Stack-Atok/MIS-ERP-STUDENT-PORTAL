import { create } from "zustand";
import api from "../lib/axios";

// Bootstrap from localStorage if present
const stored = localStorage.getItem("student");
const initialUser = stored ? JSON.parse(stored) : null;

export const useUserStore = create((set, get) => ({
  // start with whatever we have in localStorage
  user: initialUser,
  loading: false,
  error: null,

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.post("login_student.php", { email, password });
      // persist full student
      localStorage.setItem("student", JSON.stringify(data));
      localStorage.setItem("student_id", data.id);
      set({ user: data, loading: false });
      return data;
    } catch (err) {
      const msg = err.response?.data?.message || err.message;
      set({ error: msg, loading: false });
      throw new Error(msg);
    }
  },

  logout: async () => {
    set({ loading: true, error: null });
    try {
      await api.post("logout_student.php");
    } catch {
      // ignore
    }
    // clear cache
    localStorage.removeItem("student");
    localStorage.removeItem("student_id");
    set({ user: null, loading: false });
  },

  register: async (formData) => {
    set({ loading: true, error: null });
    try {
      const { data } = await api.post("register_student.php", formData);
      localStorage.setItem("student", JSON.stringify(data));
      localStorage.setItem("student_id", data.id);
      set({ user: data, loading: false });
      return data;
    } catch (err) {
      const msg = err.response?.data?.error || err.message;
      set({ error: msg, loading: false });
      throw new Error(msg);
    }
  },
}));
