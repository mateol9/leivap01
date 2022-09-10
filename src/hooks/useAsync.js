import { useState, useEffect } from "react";

export const useAsync = (asyncFunction, dependencies = []) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    asyncFunction()
      .then(response => {
        setData(response)
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, dependencies)

  return { data, loading, error };
}
