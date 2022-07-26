import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
//import SignIn from "./routes/authentication/authenication.comp";
import SignInPage from "./routes/authentication/authenication.comp";
/*const Navigation = () => {
  return (
    <div>
      <div>
        <h1>i am the navigation bar</h1>
      </div>
      <Outlet />
    </div>
  );
};*/
const Shop = () => {
  return <h1> Checkout this websites </h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<SignInPage />} />
      </Route>
    </Routes>
  );
};

/* return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <div key={id} className="category-container">
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};*/

export default App;
