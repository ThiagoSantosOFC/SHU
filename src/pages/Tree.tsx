import React from "react";
import Tree from "react-d3-tree";
import { IPessoa } from "../models/pessoa";
import { GetServerSideProps, NextPageContext } from "next";

interface IProps {
  pessoas: IPessoa[];
}

const Arvore = ({ pessoas }: IProps) => {
  const data = {
    name: pessoas[0] && pessoas[0].nome,
    attributes: {
      dataNascimento:
        pessoas[0]?.dataNascimento instanceof Date
          ? pessoas[0]?.dataNascimento.toLocaleDateString()
          : "",
      localNascimento: pessoas[0]?.localNascimento,
      paisOrigem: pessoas[0]?.paisOrigem,
      dataMorte:
        pessoas[0]?.dataMorte instanceof Date
          ? pessoas[0]?.dataMorte.toLocaleDateString()
          : undefined,
    },
    children: pessoas[0]?.filhosId ? [] : undefined,
  };

  const addChildNodes = (parent: any, pessoa: IPessoa) => {
    if (pessoa.filhosId && pessoa.filhosId.length > 0) {
      pessoa.filhosId.forEach((filhoId) => {
        const filho = pessoas.find((p) => p._id === filhoId);
        if (filho) {
          const filhoNode = {
            name: filho.nome,
            attributes: {
              dataNascimento:
                filho.dataNascimento instanceof Date
                  ? filho.dataNascimento.toLocaleDateString()
                  : "",
              localNascimento: filho.localNascimento,
              paisOrigem: filho.paisOrigem,
              dataMorte:
                filho.dataMorte instanceof Date
                  ? filho.dataMorte.toLocaleDateString()
                  : undefined,
            },
            children: filho.filhosId ? [] : undefined,
          };
          parent.children.push(filhoNode);
          addChildNodes(filhoNode, filho);
        }
      });
    }
  };

  if (data.children) {
    addChildNodes(data, pessoas[0]);
  }
  console.log("pessoas" + pessoas);
  console.log("data" + data.name); // array of objects

  return (
    <div className="min-h-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 ">
    <div  className="w-[2000px] h-[2000px] ">
      <Tree  
        data={data}
        orientation="vertical"
        draggable={true}
        
        translate={{ x: 100, y: 50 }}
  
        pathFunc="straight"
        nodeSize={{ x: 200, y: 200 }}
 
    
        
    
      />
    </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await fetch("http://localhost:3000/api/handlers/findall");
    const pessoas = await res.json();
    // array of objects
    return {
      props: {
        pessoas,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        pessoas: [],
      },
    };
  }
};

export default Arvore;
