import LayoutAdmin from "@/pages/Layout";
import ProductAdd from "@/pages/ProductAdd";
import ProductEdit from "@/pages/ProductEdit";
import ProductList from "@/pages/ProductList";
import Signin from "@/pages/Signin";
import Signup from "@/pages/Signup";
import { Route, Routes } from "react-router-dom";


const Router = () => {
    return <Routes>
        <Route path="/" element={<LayoutAdmin />}>
            <Route index element={<ProductList />} />
            <Route path="products" element={<ProductList />} />
            <Route path="products/add" element={<ProductAdd />} />
            <Route path="products/:id/edit" element={<ProductEdit />} />
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
        </Route>
    </Routes>;
};
export default Router;
