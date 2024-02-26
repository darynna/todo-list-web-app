import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE_PATHES } from "constants/constants";
import SharedLayout from "./SharedLayout/SharedLayout";

const FormPage = lazy(() => import("pages/FormPage/FormPage"));
const NotCompletedTasksPage = lazy(() => import("pages/CompletedTasksPage/CompletedTasksPage"));
const CompletedTasksPage = lazy(() => import("pages/NotCompletedTasksPage/NotCompletedTasksPage"));


export const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path={ROUTE_PATHES.form} element={<SharedLayout />}>
          <Route index element={<FormPage />} />
          <Route path={ROUTE_PATHES.notCompletedTasks} element={<NotCompletedTasksPage />} />
          <Route path={ROUTE_PATHES.completedTasks} element={<CompletedTasksPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
