import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import {theme} from '../../../theme/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OverviewItem from '../../../components/screens/Overview/OverviewItem';

const avatarOne = require('../../../assets/calendar/avatar.png');
const avatarTwo = require('../../../assets/calendar/avatar-1.png');
const avatarThree = require('../../../assets/calendar/avatar-2.png');

interface OverviewProps {}

const Overview: React.FC<OverviewProps> = ({}) => {
  const todoList = [
    {
      id: '' + Math.random(),
      date: {
        hour: '8:30',
        format: 'AM',
      },
      title: 'New Icons',
      desc: 'Mobile App',
      status: 'completed',
    },
    {
      id: '' + Math.random(),
      date: {
        hour: '11:00',
        format: 'AM',
      },
      title: 'Design Stand Up',
      desc: 'Mobile App',
      status: 'completed',
      participants: [
        {
          src: avatarOne,
        },
        {
          src: avatarTwo,
        },
        {
          src: avatarThree,
        },
      ],
    },
  ];
  const [activeNum, setActiveNum] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => {
            setActiveNum(0);
          }}
          style={[
            styles.navItem,
            {borderBottomWidth: activeNum === 0 ? 5 : 0},
          ]}>
          <Text style={styles.navItemText}>DAY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveNum(1);
          }}
          style={[
            styles.navItem,
            {borderBottomWidth: activeNum === 1 ? 5 : 0},
          ]}>
          <Text style={styles.navItemText}>WEEK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveNum(2);
          }}
          style={[
            styles.navItem,
            {borderBottomWidth: activeNum === 2 ? 5 : 0},
          ]}>
          <Text style={styles.navItemText}>MONTH</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.picker}>
        <Icon
          name="keyboard-arrow-left"
          size={34}
          color={theme.COLOR.LIGHT_GREY}
        />
        <Text style={styles.pickerText}>February</Text>
        <Icon
          name="keyboard-arrow-right"
          size={34}
          color={theme.COLOR.LIGHT_GREY}
        />
      </View>
      <View style={styles.counter}>
        <View style={styles.counterBox}>
          <Text style={styles.counterBoxText}>COMPLETED</Text>
          <Text style={styles.counterBoxNumber}>64</Text>
        </View>
        <View
          style={[styles.counterBox, {backgroundColor: theme.COLOR.TERTIARY}]}>
          <Text style={styles.counterBoxText}>OVERDUE</Text>
          <Text style={styles.counterBoxNumber}>5</Text>
        </View>
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={todoList}
        renderItem={({item}) => <OverviewItem {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    flexDirection: 'row',
  },
  navItem: {
    flex: 1,
    paddingVertical: theme.PADDING.MEDIUM,
    borderBottomColor: theme.COLOR.PRIMARY,
  },
  navItemText: {
    textAlign: 'center',
    fontWeight: theme.FONT_WEIGHT.LIGHT,
  },
  picker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: theme.PADDING.MEDIUM,
  },
  pickerText: {
    fontSize: theme.FONT_SIZE.BIG * 1.25,
    fontWeight: theme.FONT_WEIGHT.LIGHT,
  },
  counter: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
  },
  counterBox: {
    flex: 1,
    paddingVertical: theme.PADDING.BIG * 1.5,
    backgroundColor: theme.COLOR.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterBoxText: {
    color: theme.COLOR.WHITE,
    marginBottom: theme.MARGIN.SMALL,
  },
  counterBoxNumber: {
    fontSize: theme.FONT_SIZE.BIG * 2,
    fontWeight: theme.FONT_WEIGHT.LIGHT,
    color: theme.COLOR.WHITE,
  },
  list: {},
});
export default Overview;
