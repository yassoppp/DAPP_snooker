import styled from "styled-components";

export const Conteneur = styled.div`
  background: #0c0c0c;
  display:flex;
  justify-content: center
  align-items: center;
  height:100%;
  postion:relative;
  z-index:1
`;
export const SubConteneur = styled.div`
  postion: absolute;
  height: 100%;
  top:0
  right:0;
  bottom:0;
  left:0;
  width:100%;
  height: 100%;
  overflow: hidden;
`;

export const Backclip = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover
  background: #232a34;
  height:100vh;
  width:100wh
`;
export const Contenuu = styled.div`
  z-index: 3;
  max-width: 1200px;
  posistion: absolte;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
