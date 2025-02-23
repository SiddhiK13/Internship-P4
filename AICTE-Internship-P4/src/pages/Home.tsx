import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home as HomeIcon, LogOut, BarChart3, List, Plus } from "lucide-react";
import Analytics from "./Analytics";

const transactions = [
  { id: 1, type: "credit", amount: 4500, category: "Salary", date: "2024-04-10" },
  { id: 2, type: "expense", amount: 200, category: "Groceries", date: "2024-04-09" },
  { id: 3, type: "expense", amount: 150, category: "Transport", date: "2024-04-08" },
  { id: 4, type: "credit", amount: 1200, category: "Freelance", date: "2024-04-07" },
  { id: 5, type: "expense", amount: 600, category: "Shopping", date: "2024-04-06" },
];

const Home = () => {
  const [view, setView] = useState<"table" | "analytics">("table");
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 to-green-600">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <HomeIcon className="h-7 w-7 text-teal-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Finance Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setView("table")}
                className={`p-2 rounded-lg transition-all ${
                  view === "table" ? "bg-teal-100 text-teal-600" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <List className="h-5 w-5" />
              </button>
              <button
                onClick={() => setView("analytics")}
                className={`p-2 rounded-lg transition-all ${
                  view === "analytics" ? "bg-teal-100 text-teal-600" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <BarChart3 className="h-5 w-5" />
              </button>
              <Link to="/login" className="flex items-center text-gray-600 hover:text-gray-900">
                <LogOut className="h-5 w-5 mr-1" />
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-6">
        {/* Header Actions */}
        <div className="mb-6 flex justify-between items-center">
          <div className="flex space-x-4">
            <select className="rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 px-3 py-2">
              <option value="7">Last Week</option>
              <option value="30">Last Month</option>
              <option value="365">Last Year</option>
              <option value="custom">Custom</option>
            </select>
            <select className="rounded-lg border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 px-3 py-2">
              <option value="all">All Types</option>
              <option value="expense">Expenses</option>
              <option value="credit">Income</option>
            </select>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
          >
            <Plus className="h-5 w-5 mr-1" />
            Add Transaction
          </button>
        </div>

        {/* Content */}
        {view === "table" ? (
          <div className="bg-white/90 backdrop-blur-lg shadow-xl rounded-xl overflow-hidden border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50 transition-all">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          transaction.type === "credit"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {transaction.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700">
                      <span className={transaction.type === "credit" ? "text-green-600" : "text-red-600"}>
                        {transaction.amount}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">{transaction.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{transaction.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <Analytics transactions={transactions} />
        )}
      </main>
    </div>
  );
};

export default Home;
