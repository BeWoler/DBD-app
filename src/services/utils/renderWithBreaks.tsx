import { Fragment, type JSX } from 'react';

export const renderWithBreaks = (text: string): JSX.Element[] => {
  return text.split('\n').map((line, index) => (
    <Fragment key={`${index}-${line}`}>
      {line}
      <br />
    </Fragment>
  ));
};
