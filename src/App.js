import React from "react";
import Search from "./components/Search";
import Review from "./pages/Review";
import Card from "./components/Card";
import ReviewList from "./pages/ReviewList";
import { Router, createBrowserRouter , Routes, BrowserRouter ,Route} from "react-router-dom";
import SearchResults from "./pages/SearchResults";
export default function App() {
  return (
    <div><SearchResults/></div>
  );
}