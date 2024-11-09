import { TextStyle, ViewStyle } from "react-native";
export type DatePickerModalPropTypes = {
    date?: Date | undefined;
    setDate?: (date: Date) => void;
    range: {
        startDate: Date | undefined;
        endDate: Date | undefined;
    };
    setRange: (range: {
        startDate: Date | undefined;
        endDate: Date | undefined;
    }) => void;
    dates: Date[] | undefined;
    setDates: (dates: Date[] | undefined) => void;
    datePickerWithTime?: boolean;
    showDatePicker?: boolean;
    setShowDatePicker: (showDatePicker: boolean) => void;
    disableFutureDates?: boolean;
    disablePastDates?: boolean;
    onDateChange?: (date: Date) => void;
    onDateRangeChange?: (range: {
        startDate: Date | undefined;
        endDate: Date | undefined;
    }) => void;
    onDatesChange?: (dates: Date[] | undefined) => void;
    datePickerBackgroundColor?: string;
    showDatePickerCloseButton?: boolean;
    datePickerCloseButtonColor?: string;
    datePickerMode?: 'single' | 'range' | 'multiple';
    selectedItemColor?: string;
    selectedTextStyle?: TextStyle;
    firstDayOfWeek?: number;
    headerTextContainerStyle?: ViewStyle;
    setShowDatePlaceholder?: (showDatePlaceholder: boolean) => void;
    animationType?: 'zoomIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'none';
    animationDuration?: number;
    hideConfirmButton?: boolean;
    theme?: 'light' | 'dark' | 'system';
};
//# sourceMappingURL=datePickerModalPropTypes.d.ts.map