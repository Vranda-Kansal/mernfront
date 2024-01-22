import Header from "./components/Header";
import BookContainer from "./components/BookContainer";
import Specialists from "./components/Specialists";
import Testimonials from "./components/Testimonials";
import BookForm from "./components/BookForm";
import { useState } from "react";

function App() {
  const [toggleMode, setToggleMode] = useState(false);
  const [toggleBookForm, setToggleBookForm] = useState(false);
  return (
    <div className={`${toggleMode && "dark"}`}>
      <div className="sticky top-0 z-50 bg-white dark:bg-neutral-900">
        <Header
          setToggleBookForm={setToggleBookForm}
          setToggleMode={setToggleMode}
          toggleMode={toggleMode}
        />
      </div>
      <div>
        <BookContainer setToggleBookForm={setToggleBookForm} />
      </div>
      {toggleBookForm && (
        <div className="absolute z-50 h-[540px] my-8">
          <BookForm setToggleBookForm={setToggleBookForm} />
        </div>
      )}
      <div className="mt-[40%] dark:bg-neutral-900">
        <Specialists />
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
