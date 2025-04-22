"use client";
import AdminLayoutWrapper from "../admin/Layout";

export default function AdminProvider({ children }) {
  return <AdminLayoutWrapper>{children}</AdminLayoutWrapper>;
}
