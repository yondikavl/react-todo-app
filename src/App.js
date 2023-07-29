import { TodoWrapper } from "./components/TodoWrapper";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="bg-zinc-900">
      <div className="flex flex-col justify-center md:items-center min-h-screen">
        <TodoWrapper />
      </div>
      <Footer />
    </div>
  );
};

export default App;
