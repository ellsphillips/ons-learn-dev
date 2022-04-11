import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Slider = styled.div`
  background-color: #ccc;
  position: absolute;
  cursor: pointer;
  inset: 0;
  transition: 0.2s;
  border-radius: 0.5rem;

  &:before {
    background-color: #fff;
    content: "";
    height: 1.25rem;
    width: 1.25rem;
    left: 0.375rem;
    bottom: 0.375rem;
    position: absolute;
    transition: 0.4s;
    border-radius: 0.25rem;
  }
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  height: 2rem;
  width: 4rem;

  input {
    display: none;

    &:checked + ${Slider} {
      background-color: var(--accent-clr);

      &:before {
        transform: translateX(2rem);
      }
    }
  }
`;
