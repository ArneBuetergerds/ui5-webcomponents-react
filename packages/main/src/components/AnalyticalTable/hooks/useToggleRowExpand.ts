import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { useCallback } from 'react';

export const useToggleRowExpand = (onRowExpandChange, isTreeTable) => {
  return useCallback(
    (instance) => {
      instance.getExpandedToggleProps.push((row) => {
        return {
          onClick: (e) => {
            e.stopPropagation();
            e.persist();
            row.toggleExpanded();
            let column = null;
            if (!isTreeTable) {
              column = row.cells.find((cell) => cell.column.id === row.groupByID).column;
            }

            onRowExpandChange(Event.of(null, e, { row, column }));
          }
        };
      });
    },
    [onRowExpandChange, isTreeTable]
  );
};