import { PropsWithChildren, ReactNode, useState } from 'react';
import styled from 'styled-components';

type Props = {
  label: ReactNode;
};

export const Dropdown = (props: PropsWithChildren<Props>) => {
  const { label, children } = props;
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(!isOpen);

  return (
    <Root>
      <Control onClick={handleOpen} type="button">
        {label}
      </Control>
      {isOpen && <Menu>{children}</Menu>}
    </Root>
  );
};

const Root = styled.div``;

const Control = styled.button`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const Menu = styled.menu`
  margin: 1px 0 0;
  padding: 0;
  border: 1px solid #bebebe;
  overflow-y: auto;
`;
