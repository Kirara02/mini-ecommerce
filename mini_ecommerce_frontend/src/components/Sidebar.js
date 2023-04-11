import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "primereact/menu";
import { useAuth } from "../auth/useAuth";

const Sidebar = () => {
  const { signOut, user } = useAuth();
  const userMenus = [
    {
      label: "Dashboard",
      icon: "pi pi-th-large",
      template: (item, options) => {
        return (
          <Link to={"/user/dashboard"} className={options.className}>
            <span className={options.iconClassName}></span>
            <span className={options.labelClassName}>{item.label}</span>
          </Link>
        );
      },
    },
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      command: () => signOut(),
    },
  ];
  const adminMenus = [
    {
      label: "Dashboard",
      icon: "pi pi-th-large",
      template: (item, options) => {
        return (
          <Link to={"/admin/dashboard"} className={options.className}>
            <span className={options.iconClassName}></span>
            <span className={options.labelClassName}>{item.label}</span>
          </Link>
        );
      },
    },
    {
      label: "Pesanan",
      icon: "pi pi-shopping-cart",
      template: (item, options) => {
        return (
          <Link to={"/admin/pesanan"} className={options.className}>
            <span className={options.iconClassName}></span>
            <span className={options.labelClassName}>{item.label}</span>
          </Link>
        );
      },
    },
    {
      label: "Kategori",
      icon: "pi pi-tags",
      template: (item, options) => {
        return (
          <Link to={"/admin/kategori"} className={options.className}>
            <span className={options.iconClassName}></span>
            <span className={options.labelClassName}>{item.label}</span>
          </Link>
        );
      },
    },
    {
      label: "Produk",
      icon: "pi pi-box",
      template: (item, options) => {
        return (
          <Link to={"/admin/produk"} className={options.className}>
            <span className={options.iconClassName}></span>
            <span className={options.labelClassName}>{item.label}</span>
          </Link>
        );
      },
    },
    {
      label: "Pengguna",
      icon: "pi pi-users",
      template: (item, options) => {
        return (
          <Link to={"/admin/pengguna"} className={options.className}>
            <span className={options.iconClassName}></span>
            <span className={options.labelClassName}>{item.label}</span>
          </Link>
        );
      },
    },
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      command: () => signOut(),
    },
  ];

  return (
    <div className="sidebar">
      <h3>Menu</h3>
      <Menu model={user.role === "admin" ? adminMenus : userMenus } />
    </div>
  );
};

export default Sidebar;
