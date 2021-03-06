import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  Circle,
  Icon,
  LinearGradient,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const UniversalScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientit}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.ViewWW} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('FeedbackScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidYl,
              {
                color: theme.colors.light,
                borderRadius: 12,
                backgroundColor: theme.colors.mediumInverse,
              },
            ]}
            title={'Feedback'}
          />
        </View>

        <View style={styles.ViewBs} pointerEvents={'auto'}>
          <Image
            style={styles.ImageTn}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <View
          style={[
            styles.ViewXP,
            { backgroundColor: theme.colors.lightInverse, borderRadius: 12 },
          ]}
          pointerEvents={'auto'}
        >
          <Text style={[styles.TextE3, { color: theme.colors.surface }]}>
            {'Universal Topics'}
          </Text>
        </View>

        <View style={styles.Viewwv} pointerEvents={'auto'}>
          <View style={styles.ViewPC} pointerEvents={'auto'}>
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('EconomicsBasicsScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles.ViewF7} pointerEvents={'auto'}>
                <Circle size={80} bgColor={theme.colors.secondary}>
                  <Circle size={70} bgColor={theme.colors.divider}>
                    <Icon
                      size={32}
                      color={theme.colors.primary}
                      name={'Entypo/line-graph'}
                    />
                  </Circle>
                </Circle>

                <Text style={[styles.TextK1, { color: theme.colors.light }]}>
                  {'Economics Basics\n'}
                </Text>
              </View>
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('Web30Screen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles.ViewFe} pointerEvents={'auto'}>
                <Circle size={80} bgColor={theme.colors.secondary}>
                  <Circle size={70} bgColor={theme.colors.divider}>
                    <Icon
                      size={32}
                      color={theme.colors.primary}
                      name={'MaterialCommunityIcons/spider-web'}
                    />
                  </Circle>
                </Circle>

                <Text style={[styles.Textav, { color: theme.colors.light }]}>
                  {'Web 3.0'}
                </Text>
              </View>
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('BlockchainScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles.ViewWU} pointerEvents={'auto'}>
                <Circle size={80} bgColor={theme.colors.secondary}>
                  <Circle size={70} bgColor={theme.colors.divider}>
                    <Icon
                      size={32}
                      color={theme.colors.primary}
                      name={'MaterialCommunityIcons/semantic-web'}
                    />
                  </Circle>
                </Circle>

                <Text style={[styles.Textfc, { color: theme.colors.light }]}>
                  {'Blockchain'}
                </Text>
              </View>
            </Touchable>
          </View>

          <View style={styles.Viewya} pointerEvents={'auto'}>
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('WalletsScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles.ViewTe} pointerEvents={'auto'}>
                <Circle size={80} bgColor={theme.colors.secondary}>
                  <Circle size={70} bgColor={theme.colors.divider}>
                    <Icon
                      size={32}
                      color={theme.colors.primary}
                      name={'Ionicons/wallet-outline'}
                    />
                  </Circle>
                </Circle>

                <Text style={[styles.TextV3, { color: theme.colors.light }]}>
                  {'Crypto Wallets'}
                </Text>
              </View>
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('DAOsScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles.Viewhj} pointerEvents={'auto'}>
                <Circle size={80} bgColor={theme.colors.secondary}>
                  <Circle size={70} bgColor={theme.colors.divider}>
                    <Icon
                      size={32}
                      color={theme.colors.primary}
                      name={'Ionicons/md-disc-outline'}
                    />
                  </Circle>
                </Circle>

                <Text style={[styles.Textmk, { color: theme.colors.light }]}>
                  {'Intro to DAOs'}
                </Text>
              </View>
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('AvoidingScamsScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles.ViewkL} pointerEvents={'auto'}>
                <Circle size={80} bgColor={theme.colors.secondary}>
                  <Circle size={70} bgColor={theme.colors.divider}>
                    <Icon
                      size={32}
                      color={theme.colors.primary}
                      name={'MaterialCommunityIcons/security'}
                    />
                  </Circle>
                </Circle>

                <Text style={[styles.Textid, { color: theme.colors.light }]}>
                  {'Avoiding Scams'}
                </Text>
              </View>
            </Touchable>
          </View>
        </View>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidYl: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewWW: {
    alignSelf: 'flex-end',
  },
  ImageTn: {
    width: 75,
    height: 75,
  },
  ViewBs: {
    alignItems: 'center',
  },
  TextE3: {
    fontSize: 24,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  ViewXP: {
    paddingTop: 16,
    paddingBottom: 16,
    width: 230,
    height: 45,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 24,
  },
  TextK1: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
  },
  ViewF7: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Textav: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
  },
  ViewFe: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Textfc: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
  },
  ViewWU: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  ViewPC: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  TextV3: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
  },
  ViewTe: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Textmk: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
  },
  Viewhj: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Textid: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
  },
  ViewkL: {
    alignItems: 'center',
    marginBottom: 6,
    marginTop: 6,
  },
  Viewya: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  Viewwv: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  LinearGradientit: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(UniversalScreen);
