import { TouchableOpacity } from 'react-native-gesture-handler';
import styled, {css} from 'styled-components/native';

interface BadgeColor {
  type: string;
}

export const BadgeContent = styled.ScrollView`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  width: 100%;
  flex-wrap: wrap;
  padding: 0px 15px 15px 0px;
`;

export const Badge = styled(TouchableOpacity)<BadgeColor>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px 10px 5px;
  border-radius: 30px;
  justify-content: center;
  margin-right: 5px;
  margin-left: 5px;

  background-color: ${
    props => (props.type === 'stories' ? '#FB5555' : (
      props.type === 'series' ? '#F4A623' : (
        props.type === 'events' ? '#FC0080' : (
          '#0070F3'
        )
      )
    ))
  };
`;

export const BadgeDescription = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: 'Roboto-Regular';
`;

export const BadgeViewValue = styled.View<BadgeColor>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 30px;
  height: 30px;
  margin-left: 5px;
  background-color: ${
    props => (props.type === 'stories' ? '#C94444' : (
      props.type === 'series' ? '#C3851C' : (
        props.type === 'events' ? '#CA0067' : (
          '#005AC3'
        )
      )
    ))
  };
`;

export const BadgeValue = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'Roboto-Regular';
`;
