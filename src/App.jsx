// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Layout } from "@/components/Layout";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import ClassSchedule from "./pages/classSchedule";
// import ClassSchedulingForm from "./pages/ClassSchedulingForm";
// import TeacherLogin from "./pages/TeacherLogin"; // ✅ Import login

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           {/* 🔹 Routes WITHOUT Sidebar/Layout */}
//           <Route path="/login" element={<TeacherLogin />} />

//           {/* 🔹 Routes WITH Sidebar/Layout */}
//           <Route element={<Layout />}>
//             <Route path="/" element={<Index />} />
//             <Route path="/classes" element={<ClassSchedule />} />
//             <Route path="/schedule" element={<ClassSchedulingForm />} />
//             {/* Catch-all route */}
//             <Route path="*" element={<NotFound />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;


// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { Layout } from "@/components/Layout";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import ClassSchedule from "./pages/classSchedule";
// import ClassSchedulingForm from "./pages/ClassSchedulingForm";
// import TeacherLogin from "./pages/TeacherLogin";
// import { AuthProvider, useAuth } from "./components/AuthContext";

// const queryClient = new QueryClient();

// // ✅ ProtectedRoute wrapper
// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/login" />;
// };

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <AuthProvider>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/login" element={<TeacherLogin />} />

//             {/* ✅ Sidebar wali saari pages Protected */}
//             <Route
//               element={
//                 <ProtectedRoute>
//                   <Layout />
//                 </ProtectedRoute>
//               }
//             >
//               <Route index element={<Index />} />
//               <Route path="/classes" element={<ClassSchedule />} />
//               <Route path="/schedule" element={<ClassSchedulingForm />} />
//               <Route path="*" element={<NotFound />} />
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       </AuthProvider>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;




// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { Layout } from "@/components/Layout";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import ClassSchedule from "./pages/classSchedule";
// import ClassSchedulingForm from "./pages/ClassSchedulingForm";
// import TeacherLogin from "./pages/TeacherLogin";
// import { AuthProvider, useAuth } from "./components/AuthContext";

// const queryClient = new QueryClient();

// // ✅ ProtectedRoute wrapper
// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/login" />;
// };

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <AuthProvider>
//         <BrowserRouter>
//           <Routes>
//             {/* Login Route */}
//             <Route path="/login" element={<TeacherLogin />} />

//             {/* Protected Routes */}
//             <Route
//               element={
//                 <ProtectedRoute>
//                   <Layout />
//                 </ProtectedRoute>
//               }
//             >
//               <Route index element={<Index />} />
//               <Route path="/classes" element={<ClassSchedule />} />
//               <Route path="/schedule" element={<ClassSchedulingForm />} />
//               <Route path="*" element={<NotFound />} />
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       </AuthProvider>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;


import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import TeacherLogin from "./pages/TeacherLogin"
import { Layout } from "@/components/Layout"
import Index from "./pages/Index"
import ClassSchedule from "./pages/classSchedule"
import ClassSchedulingForm from "./pages/ClassSchedulingForm"
import NotFound from "./pages/NotFound"
import { AuthProvider, useAuth } from "./components/AuthContext"

const queryClient = new QueryClient()

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" />
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<TeacherLogin />} />

            <Route
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Index />} />
              <Route path="/classes" element={<ClassSchedule />} />
              <Route path="/schedule" element={<ClassSchedulingForm />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
