export declare const screenHeight: number;
export declare const screenWidth: number;
export declare const deviceTheme: import("react-native").ColorSchemeName;
export declare const colors: {
    primary: string;
    secondary: string;
    accent: string;
    black: string;
    white: string;
    offWhite: string;
    transparentWhite: string;
    semiTransparentWhite: string;
    semiTransparentBlack: string;
    transparentGrey: string;
    transparentBlack: string;
    grey: string;
    slightlyDarkGrey: string;
    lightGrey: string;
    darkGrey: string;
    error: string;
    lightError: string;
    success: string;
    warning: string;
    lightGreen: string;
    transparentGreen: string;
    reddishOrange: string;
};
export declare const getThemedColor: (theme: string, element: string) => {
    backgroundColor: string;
    color?: undefined;
} | {
    color: string;
    backgroundColor?: undefined;
} | undefined;
export declare const styles: {
    defaultInputStyle: {
        borderWidth: number;
        borderColor: string;
        width: "100%";
        padding: number;
        borderRadius: number;
        color: string;
        justifyContent: "center";
        height: number;
    };
    defaultMainContainerStyle: {
        justifyContent: "center";
        alignItems: "flex-start";
        padding: number;
        width: "100%";
    };
    defaultInputContainerStyle: {
        justifyContent: "center";
        alignItems: "center";
        padding: number;
        borderRadius: number;
        borderBottomStartRadius: number;
        borderBottomEndRadius: number;
        width: "100%";
    };
    defaultLabelTextStyle: {
        fontSize: number;
        marginBottom: number;
    };
    defaultLabelTextContainerStyle: {
        flexDirection: "row";
        justifyContent: "flex-start";
        gap: number;
    };
    defaultRequiredTextStyle: {
        color: string;
    };
    defaultErrorTextStyle: {
        color: string;
        fontSize: number;
        marginLeft: number;
    };
    defaultLeftIconContainerStyle: {
        position: "absolute";
        left: number;
        zIndex: number;
    };
    defaultRightIconContainerStyle: {
        position: "absolute";
        right: number;
        zIndex: number;
    };
    dateInputWrapperInner: {
        width: "100%";
    };
    datePickerModalContainer: {
        flex: number;
        padding: number;
        justifyContent: "center";
        zIndex: number;
    };
    datePickerModalInner: {
        justifyContent: "center";
        alignItems: "center";
        padding: number;
        borderRadius: number;
        minWidth: number;
    };
    datePickerModalCloseButton: {
        alignItems: "center";
        position: "absolute";
        top: number;
        right: number;
        zIndex: number;
        backgroundColor: string;
        borderRadius: number;
        paddingVertical: number;
        paddingHorizontal: number;
    };
    datePickerModalCloseButtonText: {
        color: string;
    };
    timePickerContainerStyleCustom: {
        borderRadius: number;
    };
    weekDaysContainerStyleCustom: {
        borderRadius: number;
        marginVertical: number;
        height: number;
    };
    weekDaysTextStyleCustom: {
        color: string;
        fontWeight: "500";
    };
    yearMonthContainerStyleCustom: {
        borderRadius: number;
    };
    datePickerModalLeftRightButtonIconOuter: {
        padding: number;
        borderRadius: number;
        justifyContent: "center";
        alignItems: "center";
    };
    headerContainerStyleCustom: {
        borderRadius: number;
    };
    headerTextStyleCustom: {
        color: string;
        fontWeight: "800";
    };
    selectedContainerStyleCustom: {
        backgroundColor: string;
        borderRadius: number;
    };
    selectedTextStyleCustom: {
        color: string;
        fontWeight: "700";
    };
    headerTextContainerStyleCustom: {
        backgroundColor: string;
        borderRadius: number;
        paddingHorizontal: number;
    };
    datePickerConfirmButton: {
        backgroundColor: string;
        paddingVertical: number;
        paddingHorizontal: number;
        borderRadius: number;
    };
    datePickerConfirmButtonText: {
        color: string;
        fontWeight: "700";
    };
    todayContainerStyleCustom: {
        borderColor: string;
        borderWidth: number;
        borderRadius: number;
    };
    yearMonthTextStyleCustom: {
        fontWeight: "700";
    };
    activeYearMonthContainerStyleCustom: {
        backgroundColor: string;
        borderRadius: number;
    };
    activeYearMonthTextStyleCustom: {
        color: string;
        fontWeight: "700";
    };
    selectedYearMonthContainerStyleCustom: {
        borderColor: string;
        borderWidth: number;
        borderRadius: number;
    };
    selectedYearMonthTextStyleCustom: {
        fontWeight: "700";
    };
    yearMonthTimeSelectorTextStyleCustom: {
        fontWeight: "700";
        fontSize: number;
    };
    datePickerRangeStyleCustom: {
        backgroundColor: string;
    };
    timeTextStyleCustom: {
        fontWeight: "700";
    };
};
//# sourceMappingURL=utils.d.ts.map