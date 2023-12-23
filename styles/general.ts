import { StyleSheet } from 'react-native'
import { colors } from './theme'
const viewportWidth = 375

export const wp = (percentage: number) => {
  const value = (percentage * viewportWidth) / 100
  return Math.round(value)
}

const viewportHeight = 812

export const hp = (percentage: number) => {
  const value = (percentage * viewportHeight) / 100
  return Math.round(value)
}

export const GetGeneralStyles = () =>
  StyleSheet.create({
    z1: {
      zIndex: 1,
    },
    baseContainer: { flex: 1 },
    backgroundSurface: {
      backgroundColor: '#F0F3F9',
    },
    container: {
      backgroundColor: colors.background,
    },
    text: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 16,
    },
    title: {
      fontFamily: 'Montserrat-Medium',
      fontSize: 35,
      lineHeight: 42,
    },
    subtitle: {
      fontFamily: 'Montserrat-Medium',
      fontSize: 15,
    },
    subtitleLight: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 20,
    },
    tabNavigator: {
      height: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      boxShadow: '0px -2px 10px 0px rgba(27, 38, 92, 0.10)',
      shadowOpacity: 0.58,
      shadowRadius: 16.0,
      elevation: 24,
    },
    tabNavigatorLabel: {
      fontSize: 11,
    },
    titleList: {
      fontFamily: 'Montserrat-Medium',
      fontSize: 14,
      lineHeight: 14,
      textAlign: 'left',
      alignSelf: 'stretch',
      marginTop: 0,
      paddingTop: 0,
    },

    button: {
      flexDirection: 'row',
      //paddingVertical: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonLeftIcon: {
      paddingRight: 2,
    },
    buttonRightIcon: {
      position: 'absolute',
      right: 10,
    },
    disabledButton: {
      opacity: 0.5,
    },
    buttonText: {
      fontFamily: 'Montserrat-Medium-Bold',
      fontSize: 16,
    },
    lineLogoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    lineLogoTitle: {
      fontFamily: 'Poppins',
      fontSize: wp(10),
      paddingTop: '2.5%',
      letterSpacing: -1,
    },
    buttonIcon: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    squareButtonIcon: {
      width: wp(16),
      aspectRatio: 1,
      borderRadius: 15,
      shadowColor: colors.text,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    input: {
      width: wp(72.5),
      justifyContent: 'flex-start',
    },
    textarea: {
      height: '100%',
      textAlignVertical: 'top',
    },
    inputPassword: {
      width: wp(62.5),
      left: wp(-5),
    },
    passwordHiddenButton: {
      position: 'absolute',
      right: wp(5),
    },
    dropdown: {
      marginLeft: '1%',
      width: '95%',
    },
    dropdownText: {
      paddingLeft: '100%',
    },
    backButtonSvg: {
      right: 1.5,
      transform: [{ rotateY: '180deg' }],
    },
    arrowHeader: {
      top: hp(1),
      height: hp(10),
      width: wp(100),
      alignSelf: 'center',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: colors.primary,
    },
    containerTitleArrowHeader: {
      width: wp(100),
    },
    titleArrowHeader: {
      textAlign: 'center',
      color: '#FFF',
    },
    headerArrowButton: { position: 'absolute', top: hp(2.5) },
    headerArrowButtonLeft: {
      left: wp(5),
    },
    homeHeaderArrowButtonLeft: {
      left: 0,
      top: 0,
      zIndex: 2,
    },
    headerArrowButtonRight: { right: hp(5) },
    headerLogoContainer: {
      width: wp(100),
      height: hp(15),
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalTextContainer: {
      borderBottomColor: '#F1F9FF',
      borderBottomWidth: 1,
      minHeight: hp(15.25),
      alignItems: 'center',
      justifyContent: 'center',
      width: '85%',
    },
    modalTitle: {
      fontFamily: 'Montserrat-Medium-Bold',
      fontSize: 20,
      lineHeight: 30,
      marginBottom: hp(4),
      paddingTop: hp(2),
    },
    modalContainer: {
      width: wp(90),
      alignSelf: 'center',
      borderRadius: 30,
      alignItems: 'center',
    },
    modalText: {
      textAlign: 'center',
    },
    modalMessage: {
      marginBottom: hp(2),
      textAlignVertical: 'center',
      alignItems: 'center',
    },
    containerButtonsModal: {
      flexDirection: 'row',
    },
    scheduleEmptyLabel: {
      paddingLeft: wp(2),
      paddingTop: hp(1),
    },
    scheduleListContainer: {
      paddingTop: hp(2),
    },
    jobItemContainer: {
      margin: 1,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.2,
      backgroundColor: '#FFF',
      marginBottom: hp(2.5),
      marginHorizontal: 2,
      borderRadius: 25,
      elevation: 6,
    },
    jobDescription: {
      marginHorizontal: wp(5),
      textAlign: 'justify',
    },
    jobRateContainer: {
      height: hp(3.5),
      minWidth: wp(12.5),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    jobRateText: {
      marginHorizontal: '1%',
    },
    jobItemHeaderTitle: {
      fontSize: 18,
      fontFamily: 'Montserrat-Medium-Bold',
    },
    jobItemHeaderFromTo: {
      fontSize: 14,
    },
    jobItemBottomContainer: {
      height: hp(10),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    jobItemBottomContainerShare: {
      height: hp(10),
      alignSelf: 'center',
      marginVertical: 10,
    },
    jobItemHeader: {
      marginBottom: 15,
    },
    jobItemMapContainer: {
      height: hp(23),
      width: '90%',
      alignSelf: 'center',
    },
    jobItemMapImage: {
      resizeMode: 'cover',
      height: '90%',
      width: '100%',
    },
    jobItemMapTextUnderline: {
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid',
    },
    jobItemMapTextContainer: {
      paddingHorizontal: 20,
      marginBottom: 10,
    },
    tabItemLabel: {
      paddingTop: hp(0.6),
    },
    tabItemContainer: {
      alignItems: 'center',
    },
    tabContainer: {
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: wp(100),
      alignSelf: 'center',
      alignItems: 'center',
    },
    dateHeaderTitle: {
      fontFamily: 'Montserrat-Medium-Regular',
      textAlign: 'center',
      fontSize: 40,
    },
    dateHeaderSubtitle: {
      textAlign: 'center',
      fontSize: 32,
    },
    dateHeaderContainer: {
      width: '100%',
      alignSelf: 'center',
    },
    payrollWeekTitle: { fontSize: 17 },
    payrollWeekListContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    weekDayItemContainer: {
      alignItems: 'center',
    },
    weekDayItemTitle: {
      fontSize: 16,
    },
    weekDayItemNumberContainer: {
      borderRadius: 10,
      width: wp(7.5),
      aspectRatio: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    todayDotContainer: {
      borderRadius: 10,
    },
    weekDayItemNumber: {
      fontSize: 14,
      textAlign: 'center',
      fontFamily: 'Montserrat-Medium-SemiBold',
    },
    weekListContainer: {
      height: hp(70),
      width: '95%',
      alignSelf: 'center',
    },
    weekHoursItemContainer: {
      height: hp(8.5),
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
    },
    weekHoursItemTitle: { fontSize: 13 },
    weekHoursITemSubtitle: { fontSize: 14, fontFamily: 'Montserrat-Medium-SemiBold' },
    weekHoursListTotalTitle: { fontSize: 14, textAlign: 'right' },
    weekHoursListWorkedHoursTitle: {
      fontSize: 14,
      textAlign: 'right',
      marginTop: hp(2),
    },
    weekDayItemMarker: {
      width: wp(1.25),
      aspectRatio: 1,
      borderRadius: 20,
    },
    scheduleWrapper: {
      paddingHorizontal: 0,
    },
    calendarWrapper: {
      paddingHorizontal: wp(5),
    },
    notificationCheckAll: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: wp(8),
      paddingVertical: wp(2),
    },
    notificationRemove: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: wp(2),
      marginBottom: hp(2.5),
    },
    notificationRemoveConfirm: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: wp(2),
    },
    notificationCounterContainer: {
      width: wp(25),
      aspectRatio: 1,
      marginBottom: hp(2.5),
      marginHorizontal: 0,
      borderRadius: 25,
      elevation: 6,
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'column',
    },
    notificationCounterCountContainer: {
      width: wp(12),
      aspectRatio: 1,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    notificationCounterTitle: { fontSize: 24, textAlign: 'center' },

    popUpIcon: {
      position: 'absolute',
      borderRadius: 50,
      width: wp(1.5),
      top: hp(0.2),
      left: wp(4.85),
      aspectRatio: 1,
    },
    badgeContainer: {
      backgroundColor: colors.primary,
      borderRadius: 12,
      width: 18,
      height: 18,
      justifyContent: 'center',
      alignItems: 'center',
      border: '2px solid #FFF',
    },
    badgeText: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold',
    },
    homeViewIconButton: { padding: wp(3) },
    homeViewIconGoBack: { borderRadius: 50, width: 30, height: 30 },
    notificationEmptyLabel: {
      opacity: 0.7,
      textAlign: 'center',
      fontSize: wp(5),
      padding: wp(2),
      margin: wp(2),
    },
    notificationFilter: {
      shadowOffset: { width: 0, height: 0 },
      shadowColor: 'black',
      shadowOpacity: 0.2,
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      width: '42%',
      height: '80%',
      marginBottom: hp(2.5),
      marginTop: hp(1.5),
      borderRadius: 25,
      elevation: 6,
      flexDirection: 'row',
      opacity: 1,
      borderWidth: 1,
      borderColor: 'white',
    },
    notificationContainerFilter: {
      flex: 1,
    },
    containerBoxes: {
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    boxNumberNotification: {
      backgroundColor: colors.background,
      height: 100,
      width: '30%',
      padding: 10,
      borderRadius: 15,
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowColor: colors.text,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginTop: 5,
    },
    containerNumberBoxNotifications: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      width: 50,
      borderRadius: 50,
    },
    numberBoxNotifications: {
      fontSize: 20,
      color: '#FFF',
    },
    textBoxNotifications: {
      fontFamily: 'Montserrat-Medium-Regular',
      fontSize: 12,
      color: colors.primary,
      textAlign: 'center',
    },
    notificationContentTitle: {
      fontSize: 20,
      textAlign: 'center',
    },
    notificationContentMessage: {
      paddingTop: hp(2.5),
      paddingLeft: wp(2.5),
      paddingRight: wp(2.5),
      textAlign: 'justify',
      lineHeight: 18,
    },
    wrapperShadow: {
      backgroundColor: colors.background,
      borderRadius: 15,

      padding: 15,
    },
    containerInputDate: {
      alignItems: 'center',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textInputDate: {
      textAlign: 'center',
      color: colors.primary,
    },
    containerIconRemoveDate: {
      marginRight: 20,
    },
    textColor: {
      color: colors.text,
    },
    referencesTitleAddJob: {
      marginTop: 20,
      fontSize: 18,
    },
    containerSimpleDropdown: {
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: '100%',
      paddingHorizontal: 20,
      flexDirection: 'row',
    },
    contentSimpleDropdown: {
      backgroundColor: colors.background,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: colors.primary,
      borderRadius: 30,
      width: wp(85),
    },
    lineContentSimpleDropdown: {
      width: '100%',
      height: 1,
      backgroundColor: '#CCCCCC',
    },
    containerItemSimpleDropdown: {
      justifyContent: 'center',
    },
    modalSelectGalleryCamera: {
      justifyContent: 'center',
      margin: 0,
    },
    modalSelectGalleryCameraBody: {
      width: '85%',
      justifyContent: 'center',
      borderRadius: 0,
      backgroundColor: 'transparent',
      height: 120,
    },
    modalSelectGalleryCameraItems: {
      backgroundColor: colors.background,
      width: '100%',
      borderRadius: 10,
      height: 120,
      justifyContent: 'space-evenly',
    },
    modalSelectGalleryCameraItem: {
      textAlign: 'center',
      fontSize: 18,
    },

    containerShareJob: {
      paddingHorizontal: 0,
      paddingVertical: 0,
      paddingBottom: 0,
      marginTop: -hp(1),
    },
    worksiteSubTitle: {
      fontSize: 13,
    },
  })

export const GeneralStyles = GetGeneralStyles()
