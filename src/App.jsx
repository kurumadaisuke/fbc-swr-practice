import useSWR from "swr";
import "./App.css";

const fetcher = (url) => fetch(url).then((res) => res.statusText);

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div>Failed to load.</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <p>Status : {data}</p>
    </>
  );
}

export default App;
