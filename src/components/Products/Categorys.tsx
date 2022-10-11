import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { types } from "sass";
import useFetch from "../../Hooks/useFetch";
import Loading from "../Loading";
import styles from "./Categorys.module.scss";

const Categorys = () => {
  const [categorys, setCategorys] = useState<string[]>();

  const { error, request, loading } = useFetch();

  useEffect(() => {
    getCategorys();
  }, []);

  async function getCategorys() {
    let { json } = await request(
      "https://fakestoreapi.com/products/categories"
    );

    setCategorys(json);
  }
  if (loading) return <Loading />;
  if (categorys)
    return (
      <section className={styles.category}>
        <div className={styles.container}>
          <h2>By Category:</h2>
          <nav>
            <ul>
              {categorys.map((item, index) => (
                <li key={index}>
                  <NavLink to={`/category/${item}`}>{item}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    );
  else return <p>Não existe categorias</p>;
};

export default Categorys;
