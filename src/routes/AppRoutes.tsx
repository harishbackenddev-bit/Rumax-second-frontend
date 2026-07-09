// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";

// Layouts
import WebsiteLayout from "@/layouts/WebsiteLayout";
import AuthLayout from "@/layouts/AuthLayout";

// Website Pages
import Home from "@/pages/website/Home";

const AppRoutes = () => {
  return (
    <Routes>
      {/* WEBSITE - Public */}
      <Route path="/" element={<WebsiteLayout />}>
        {/* Main Pages */}
        <Route index element={<Home />} />
      </Route>

      {/* AUTH - Public */}
      <Route path="/auth" element={<AuthLayout />}>
        {/* Add auth routes here */}
      </Route>

      {/* 404 - Not Found */}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;