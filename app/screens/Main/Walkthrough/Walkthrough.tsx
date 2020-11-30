import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {theme} from '../../../theme/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyButton from '../../../components/shared/MyButton';
import AuthContext from '../../../context/AuthContext';

const Walkthrough: React.FC = ({}) => {
  const {setFirstLogin} = useContext(AuthContext);
  const [active, setActive] = useState(1);
  const dots = [
    {num: 0, id: 'random-0'},
    {num: 1, id: 'random-1'},
    {num: 2, id: 'random-2'},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.boxes}>
        <View style={styles.leftBox}></View>
        <View style={styles.centerBox}>
          <View style={styles.centerBoxContent}>
            <Icon
              name="check-circle"
              size={30}
              color={theme.COLOR.WHITE}
              style={styles.centerBoxIcon}
            />
            <View>
              <Text style={styles.centerBoxText}>____________</Text>
              <Text style={styles.centerBoxText}>_______</Text>
            </View>
          </View>
          <View style={styles.centerBoxContent}>
            <Icon
              name="check-circle"
              size={30}
              color={theme.COLOR.WHITE}
              style={styles.centerBoxIcon}
            />
            <View>
              <Text style={styles.centerBoxText}>____________</Text>
              <Text style={styles.centerBoxText}>_______</Text>
            </View>
          </View>
          <View style={styles.centerBoxContent}>
            <Icon
              name="check-circle"
              size={30}
              color={theme.COLOR.WHITE}
              style={styles.centerBoxIcon}
            />
            <View>
              <Text style={styles.centerBoxText}>____________</Text>
              <Text style={styles.centerBoxText}>_______</Text>
            </View>
          </View>
        </View>
        <View style={styles.rightBox}></View>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          Manage your tasks quickly {`\n`} and efficiently
        </Text>
      </View>
      <View style={styles.dots}>
        <FlatList
          horizontal
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          data={dots}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                setActive(item.num);
              }}>
              <View
                style={[
                  styles.dot,
                  {
                    backgroundColor:
                      active === item.num
                        ? theme.COLOR.SECONDARY
                        : theme.COLOR.LIGHT_GREY,
                  },
                ]}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <MyButton
        title="Home page"
        onPress={() => {
          setFirstLogin(false);
        }}
        backgroundColor={theme.COLOR.PRIMARY}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: theme.COLOR.WHITE,
  },
  boxes: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftBox: {
    flex: 1,
    height: '60%',
    backgroundColor: theme.COLOR.SECONDARY,
  },
  centerBox: {
    flex: 7,
    backgroundColor: theme.COLOR.TERTIARY,
    alignItems: 'center',
    justifyContent: 'center',
    height: '60%',
    bottom: 20,
    marginHorizontal: theme.MARGIN.MEDIUM,
  },
  centerBoxContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  centerBoxIcon: {
    marginRight: theme.MARGIN.MEDIUM,
    top: 5,
  },
  centerBoxText: {
    color: theme.COLOR.WHITE,
  },
  rightBox: {
    flex: 1,
    backgroundColor: theme.COLOR.PRIMARY,
    height: '60%',
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: theme.FONT_SIZE.MEDIUM,
    fontWeight: theme.FONT_WEIGHT.LIGHT,
    textAlign: 'center',
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dots: {
    flexGrow: 1,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    backgroundColor: theme.COLOR.SECONDARY,
  },
});

export default Walkthrough;
