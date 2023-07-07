import React from 'react';
import Tree from 'react-d3-tree';
import { IPessoa } from '../models/pessoa';


interface IProps {
  pessoas: IPessoa[];
}


const arvore = ({ pessoas }: IProps) => {
  
  const data = {
    name: 'Top Level',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
      {
        name: 'Level 2: B',
      },
    ],
  };

  return (
    <Tree
      data={data}
      orientation="vertical"
      translate={{ x: 200, y: 200 }}
      pathFunc="straight"
    />
  );
};

export default arvore;