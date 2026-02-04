import { useEffect, useMemo } from "react";
import BudgetForm from "./components/BudgetForm";
import BudgetTracker from "./components/BudgetTracker";
import { useBudget } from "./hooks/useBudget";
import ExpenseModal from "./components/ExpenseModal";
import ExpenseList from "./components/ExpenseList";
import FilterByCategory from "./components/FilterByCategory";

function App() {
  const { state } = useBudget();
  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);

  useEffect(() => {
    localStorage.setItem("budget", state.budget.toString());
    localStorage.setItem("expenses", JSON.stringify(state.expenses));
  }, [state]);

  return (
    <>
      <header className="bg-blue-700 py-8 max-h-72">
        <h1 className="text-white font-black text-4xl text-center">
          Planificador de Gastos
        </h1>
      </header>
      <div className="bg-white max-w-3xl mx-auto p-10 rounded-lg shadow-lg mt-10">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>
      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-10">
          <FilterByCategory />
          <ExpenseList />
          <ExpenseModal />
        </main>
      )}
    </>
  );
}

export default App;
