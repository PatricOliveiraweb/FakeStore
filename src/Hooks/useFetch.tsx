import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const request = async (url: string) => {
    let response;
    let json;
    try {
      setLoading(true);
      setError(null);
      response = await fetch(url);
      json = await response.json();
      if (!response.ok) {
        throw new Error("What a weird error");
      }
    } catch (erro: any) {
      setError(erro.message);
    } finally {
      setLoading(false);
      return { response, json };
    }
  };

  return { loading, error, request };
};

export default useFetch;
