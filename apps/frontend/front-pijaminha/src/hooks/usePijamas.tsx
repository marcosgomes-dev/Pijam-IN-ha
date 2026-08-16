import { useEffect, useState } from "react";
import type { Pijama } from "../Types/Pijama";
import axios from "axios";
import { API_URL } from "../config/api";

export function usePijamas() {
  const [pijamas, setPijamas] = useState<Pijama[]>([]);

  const url = `${API_URL}/pijamas`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {

        setPijamas(response.data.pajamas);

      })
      .catch((error) => console.error("Algo deu errado: " + error));
  }, []);
  return { pijamas, setPijamas };
}
