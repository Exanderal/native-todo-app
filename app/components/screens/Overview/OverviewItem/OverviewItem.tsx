import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {theme} from '../../../../theme/theme';

interface OverviewItemProps {
  date: {
    hour: string;
    format: string;
  };
  title: string;
  desc: string;
  participants?: {
    src: number;
  }[];
  status: string;
}

const OverviewItem: React.FC<OverviewItemProps> = ({
  date,
  title,
  desc,
  participants,
  status,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.date}>
        <Text style={styles.dateHour}>{date.hour}</Text>
        <Text style={styles.dateFormat}>{date.format}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyTitle}>{title}</Text>
        <Text style={styles.bodyDesc}>{desc}</Text>
        {participants ? (
          <View>
            {participants.map((cur) => {
              <Image source={cur.src} style={styles.image} />;
            })}
          </View>
        ) : null}
      </View>
      {/* TODO FIX IMAGE SHOWING */}
      <View
        style={[
          styles.status,
          {
            backgroundColor:
              status === 'completed'
                ? theme.COLOR.PRIMARY
                : theme.COLOR.SECONDARY,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    paddingVertical: theme.PADDING.BIG * 1.25,
    alignItems: 'center',
    paddingHorizontal: theme.PADDING.MEDIUM,
  },
  date: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  dateHour: {
    color: theme.COLOR.DARK_GREY,
  },
  dateFormat: {
    fontSize: theme.FONT_SIZE.SMALL,
  },
  body: {
    flex: 1,
    marginLeft: theme.MARGIN.BIG * 1.5,
  },
  bodyTitle: {
    fontSize: theme.FONT_SIZE.MEDIUM,
  },
  bodyDesc: {
    marginTop: theme.MARGIN.SMALL,
    color: theme.COLOR.DARK_GREY,
    fontWeight: theme.FONT_WEIGHT.LIGHT,
    fontSize: theme.FONT_SIZE.SMALL,
  },
  image: {
    height: 34,
    width: 34,
  },
  status: {
    height: 16,
    width: 16,
    borderRadius: 8,
  },
});
export default OverviewItem;
