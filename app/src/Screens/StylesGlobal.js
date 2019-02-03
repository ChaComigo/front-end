import styled from 'styled-components';

const ButtonGlobal = styled.TouchableHighlight`
  border-radius: 5px;
  background-color: #fc6663;
`;

const ButtonTextGlobal = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

const ViewGlobal = styled.View`
  background-color: #292929;
`;

const TextInputGlobal = styled.TextInput`
  border-radius: 5px;
  background-color: #fff;
  font-size: 16px;
`;

const TextErrorMessage = styled.Text`
  color: #ce2029;
  font-size: 16px;
`;

export {
  ButtonGlobal, ViewGlobal, TextInputGlobal, TextErrorMessage, ButtonTextGlobal,
};
