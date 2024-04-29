import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import convertToTreeFormat from '../util';
import * as Plot from '@observablehq/plot';
import '../../../App.css';

interface Props {
  // eslint-disable-next-line
  jsonData: any;
  linkColor: string;
  textColor: string;
  curve: 'step' | 'step-before' | 'step-after' | 'auto' | 'bump-x';
  mark: 'dot' | 'arrow' | 'tick' | 'none';
}

const TreeGraph: React.FC<Props> = ({
  jsonData,
  linkColor,
  textColor,
  curve,
  mark,
}) => {
  const [height, setHeight] = useState<number>(2000);
  const chartRef = useRef<SVGSVGElement>(null); // eslint-disable-next-line
  // eslint-disable-next-line
  const getMaxBreadth = (tree: d3.HierarchyNode<any>): number => {
    const maxLevels: number[] = []; // eslint-disable-next-line
    const queue: d3.HierarchyNode<any>[] = [tree];
    let currentLevelCount = 1;
    let nextLevelCount = 0;
    let currentLevel = 0;

    while (queue.length > 0) {
      const node = queue.shift();
      currentLevelCount--;

      if (node && node.children) {
        nextLevelCount += node.children.length;
        node.children.forEach((child) => queue.push(child));
      }

      if (currentLevelCount === 0) {
        maxLevels.push(nextLevelCount); // eslint-disable-next-line
        currentLevel++;
        currentLevelCount = nextLevelCount;
        nextLevelCount = 0;
      }
    }

    return Math.max(...maxLevels);
  };

  useEffect(() => {
    chartRef.current!.innerHTML = '';
    const data = convertToTreeFormat(jsonData);
    // console.log(data);
    const tree = d3.hierarchy(data);
    const maxBreadth = getMaxBreadth(tree);

    const plotData = {
      axis: null,
      margin: 10,
      marginLeft: 30,
      marginRight: 160,
      marginBottom: 40,
      marginTop: 50,
      width: 928,
      height: maxBreadth * 70,
      marks: [
        Plot.tree(d3.hierarchy(data), {
          // eslint-disable-next-line
          path: (node: any) => {
            const keys = node
              .ancestors()
              .reverse() // eslint-disable-next-line
              .map(({ data: { name } }: any) => {
                return name;
              });
            return keys.join('|');
          },
          delimiter: '|',
          dot: false,
          fill: textColor,
          stroke: linkColor,
          strokeWidth: 2,
          markerEnd: mark, // eslint-disable-next-line
          text: (node: any) => {
            if (node.data.content) {
              return `${node.data.name} : ${node.data.content}`;
            } else if (node.data.name.length == 1) {
              return ``;
            } else {
              return `${node.data.name}`;
            }
          }, // eslint-disable-next-line
          textLayout: 'mirrored',
          strokeMiterlimit: 10, // eslint-disable-next-line
          dx: 10,
          dy: 0,
          treeAnchor: 'left',
          treeLayout: () => d3.tree(),
          curve: curve,
          fontWeight: '400',
          rotate: 0,
        }),
      ],
    };

    if (chartRef.current) {
      chartRef.current!.innerHTML = '';
      const plotElement = Plot.plot(plotData);
      chartRef.current.appendChild(plotElement);

      chartRef.current.style.transform = 'none';
    }
    setHeight(maxBreadth * 70);
    // eslint-disable-next-line
  }, [jsonData, linkColor, textColor, curve, mark]);

  return <svg className="chart" ref={chartRef} style={{ height: height }} />;
};

export default TreeGraph;
