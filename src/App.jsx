import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import ActivityDetail from "./activities/ActivityDetail";
import Error404 from "./Error404.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ActivitiesPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="activities/:activityId" element={<ActivityDetail />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}