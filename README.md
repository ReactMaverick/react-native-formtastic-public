# FormInput Component

The `FormInput` is a custom, reusable input component for React-Native applications. It supports both text input and date picker functionality. This component utilizes the `TextInput` component from React Native and the `react-native-ui-datepicker` for date picking functionality.

▶️ [View Live on Expo Snack](https://snack.expo.dev/@priyam.websadroit/react-native-formtastic?platform=android) ▶️

- [Usage](#usage)
- [Reference Image](#reference-image)
- [Date Picker Usage](#datepicker-usage)
- [Reference Image (Date Picker)](#reference-image-date-picker)
- [Props](#props)
- [Date Picker Props](#date-picker-props)
- [Changelog](#changelog)

## Usage

```tsx
// If you are using js/jsx instead of ts/tsx, remove the types. (i.e.: <string>, :string, type declaration/s).
import { useState } from "react";
import { FormInput } from "react-native-formtastic";

const App = () => {
  const [name, setName] = useState<string>("");

  return (
    <FormInput
      placeholderText="Enter your name"
      labelText="Name"
      isRequired={true}
      characterLimit={20} // Limits The Number of Characters Users Can Type
      value={name}
      onTextChange={(text: string) => {
        setName(text);
      }}
      leftIcon="user"
      rightIcon="times-circle"
      rightIconColor={name ? colors.grey : colors.lightGrey}
      rightIconOnPress={() => {
        setName("");
      }}
    />
  );
};

export default App;
```

## Reference Image

![Screenshot of FormInput Component](https://i.ibb.co/JnkW0SY/form-Input-component.png "FormInput Component")

## DatePicker Usage

- **datePickerMode="single"** (default mode)

  ```tsx
  // If you are using js/jsx instead of ts/tsx, remove the types. (i.e.: <string>, :string, type declaration/s).
  import { useState } from "react";
  import { FormInput } from "react-native-formtastic";

  const App = () => {
    const [dateOfBirth, setDateOfBirth] = useState<Date>(new Date());
    const [dateOfBirthValue, setDateOfBirthValue] = useState<string>("");

    return (
      <FormInput
        labelText="Date of Birth"
        isRequired={true}
        leftIcon={"calendar"}
        datePicker={true} // Use This Prop to Enable The DatePicker
        datePickerWithTime={true} // Whether to Include Date With Time
        disableFutureDates={true} // Disable Selection of Future Dates
        datePlaceholder="Select Date of Birth"
        onDateChange={(date: Date) => {
          setDateOfBirth(date);
        }}
        sendDateValue={(dateValue) => {
          setDateOfBirthValue(dateValue);
        }}
      />
    );
  };

  export default App;
  ```

- **datePickerMode="range"**

  ```tsx
  // If you are using js/jsx instead of ts/tsx, remove the types. (i.e.: <string>, :string, type declaration/s).
  import { useState } from "react";
  import { FormInput } from "react-native-formtastic";

  const App = () => {
    type DateRange = {
      startDate: Date;
      endDate: Date;
    };

    const [checkInOutDateRange, setCheckInOutDateRange] = useState<DateRange>({
      startDate: new Date(),
      endDate: new Date(),
    });

    type DateRangeValues = {
      startDate: string;
      endDate: string;
    };

    const [checkInOutDateRangeValue, setCheckInOutDateRangeValue] =
      useState<DateRangeValues>({
        startDate: "",
        endDate: "",
      });

    return (
      <FormInput
        labelText="Check In & Check Out Dates"
        isRequired={true}
        leftIcon={"calendar"}
        datePicker={true} // Use This Prop to Enable The DatePicker
        disablePastDates={true} // Disable Selection of Past Dates
        datePlaceholder="Select Check In & Check Out Dates"
        datePickerMode="range" // Required
        onDateRangeChange={({ startDate, endDate }) => {
          if (startDate && endDate) {
            setCheckInOutDateRange({
              startDate: startDate,
              endDate: endDate,
            });
          }
        }}
        sendDateRangeValues={(startDate, endDate) => {
          if (startDate && endDate) {
            setCheckInOutDateRangeValue({
              startDate: startDate,
              endDate: endDate,
            });
          }
        }}
      />
    );
  };

  export default App;
  ```

- **datePickerMode="multiple"**

  ```tsx
  // If you are using js/jsx instead of ts/tsx, remove the types. (i.e.: <string>, :string, type declaration/s).
  import { useState } from "react";
  import { FormInput } from "react-native-formtastic";

  const App = () => {
    const [meetingDates, setMeetingDates] = useState<Date[]>([]);
    const [meetingDatesValue, setMeetingDatesValue] = useState<string[]>([]);

    return (
      <FormInput
        labelText="Meeting Dates"
        isRequired={true}
        leftIcon={"calendar"}
        datePicker={true} // Use This Prop to Enable The DatePicker
        disablePastDates={true} // Disable Selection of Past Dates
        datePlaceholder="Select Meeting Dates"
        datePickerMode="multiple" // Required
        onDatesChange={(dates) => {
          if (dates) {
            setMeetingDates(dates);
          }
        }}
        sendDatesValues={(dates) => {
          if (dates) {
            setMeetingDatesValue(dates);
          }
        }}
      />
    );
  };

  export default App;
  ```

## Reference Image (Date Picker)

- **Input Component**

  ![Screenshot of FormInput Date Picker](https://i.ibb.co/FVdj8jH/date-Picker-ref-1.png "FormInput Date Picker Component")

- **Date Picker Modal (datePickerMode: "single")**

  ![Screenshot of FormInput Date Picker](https://i.ibb.co/GtFZLVQ/date-Picker-single.png "FormInput Date Picker Modal")

- **Date Picker Modal (datePickerMode: "single", dateTimePicker)**

  ![Screenshot of FormInput Date Time Picker](https://i.ibb.co/VYrS6kw/date-Time-Picker-single.png "FormInput Date Time Picker Modal")

- **Date Picker Modal (datePickerMode: "range")**

  ![Screenshot of FormInput Date Range Picker](https://i.ibb.co/w4Gjjsz/date-Picker-range.png "FormInput Date Range Picker Modal")

- **Date Picker Modal (datePickerMode: "multiple")**

  ![Screenshot of FormInput Multiple Date Picker](https://i.ibb.co/QJvmshf/date-Picker-multiple.png "FormInput Multiple Date Picker Modal")

## Props

The component accepts the following props (Important & useful props are shown first and are in bold) [All props are optional]:

- **`value`**: Value of the input field.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      value="Initial value"
      //... Other Props
    />
    ```

- **`onTextChange`**: Function to call when the text changes.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      onTextChange={(text: string) => console.log(text)} // You get the changed text here
      //... Other Props
    />
    ```

- **`labelText`**: Text for the label.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      labelText="Name"
      //... Other Props
    />
    ```

- **`isRequired`**: Boolean to mark the input as required.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      isRequired={true}
      //... Other Props
    />
    ```

- **`inputType`**: Type of input (e.g., 'default', 'numeric', 'email-address').

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      inputType="numeric"
      //... Other Props
    />
    ```

- **`error`**: Boolean to indicate an error state.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      error={false}
      //... Other Props
    />
    ```

- **`errorText`**: Text to display below input when there is an error.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      errorText="Invalid input"
      //... Other Props
    />
    ```

- `mainContainerStyle`: Style object for the outermost main container.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      mainContainerStyle={{ justifyContent: "center" }}
      //... Other Props
    />
    ```

- `inputContainerStyle`: Style object for the input container.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      inputContainerStyle={{ justifyContent: "center" }}
      //... Other Props
    />
    ```

- `inputContainerBackgroundColor`: Color of the input container background.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      inputContainerBackgroundColor='transparent'
      //... Other Props
    />
    ```

- `placeholderText`: Placeholder text for the input field.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      placeholderText="Enter your name"
      //... Other Props
    />
    ```

- `placeholderTextColor`: Color of the placeholder text.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      placeholderTextColor="black"
      //... Other Props
    />
    ```

- `inputStyle`: Style object for the input field.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      inputStyle={{ borderWidth: 0 }}
      //... Other Props
    />
    ```

- `inputTextColor`: Color of the input text.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      inputTextColor="white"
      //... Other Props
    />
    ```

- `hideLabel`: Boolean to hide the label.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      hideLabel={true}
      //... Other Props
    />
    ```

- `labelTextStyle`: Style object for the label text.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      labelTextStyle={{ fontSize: 12 }}
      //... Other Props
    />
    ```

- `labelTextContainerStyle`: Style object for the label text container.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      labelTextContainerStyle={{ flexDirection: "column" }}
      //... Other Props
    />
    ```

- `requiredText`: Text to display instead of '\*' when the input is required.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      requiredText="This field is required!"
      //... Other Props
    />
    ```

- `requiredTextStyle`: Style object for the required text.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      requiredTextStyle={{ fontSize: 5 }}
      //... Other Props
    />
    ```

- `requiredTextColor`: Color of the required text.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      requiredTextColor="red"
      //... Other Props
    />
    ```

- `labelTextColor`: Color of the label text.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      labelTextColor="blue"
      //... Other Props
    />
    ```

- `textInputProps`: Additional props for the TextInput component.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      textInputProps={{ maxLength: 10 }}
      //... Other Props
    />
    ```

- `labelTextProps`: Additional props for the label text.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      labelTextProps={{ numberOfLines: 1 }}
      //... Other Props
    />
    ```

- `requiredTextProps`: Additional props for the required text.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      requiredTextProps={{ ellipsizeMode: "tail" }}
      //... Other Props
    />
    ```

- `mainContainerViewProps`: Additional props for the main container view.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      mainContainerViewProps={{ accessibilityLabel: "main container" }}
      //... Other Props
    />
    ```

- `inputContainerViewProps`: Additional props for the text input container view.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      inputContainerViewProps={{ accessibilityLabel: "input container" }}
      //... Other Props
    />
    ```

- `labelTextContainerViewProps`: Additional props for the label text container view.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      labelTextContainerViewProps={{
        accessibilityLabel: "label text container",
      }}
      //... Other Props
    />
    ```

- `characterLimit`: Maximum number of characters allowed in the input.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      characterLimit={50}
      //... Other Props
    />
    ```

- `showCharacterLimit`: Boolean to show the character limit below input field.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      showCharacterLimit={true}
      //... Other Props
    />
    ```

- `autoCapitalize`: How to auto capitalize the input (e.g., 'none', 'sentences', 'words', 'characters').

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      autoCapitalize="words"
      //... Other Props
    />
    ```

- `errorTextStyle`: Style object for the error text.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      errorTextStyle={{ color: "red" }}
      //... Other Props
    />
    ```

- `leftIcon`: Name of the left icon (Icon used: react-native-vector-icons/FontAwesome).

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      leftIcon="home"
      //... Other Props
    />
    ```

- `leftIconColor`: Color of the left icon.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      leftIconColor="blue"
      //... Other Props
    />
    ```

- `leftIconStyle`: Style object for the left icon.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      leftIconStyle={{ size: 20 }}
      //... Other Props
    />
    ```

- `leftIconContainerStyle`: Style object for the left icon container.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      leftIconContainerStyle={{ padding: 10 }}
      //... Other Props
    />
    ```

- `renderLeftIcon`: Function to render a custom left icon.

  - Usage:

    ```tsx
    import Icon/Image/AnyComponent from 'npm-package or local directory'

    <FormInput
      //.... Other Props
      renderLeftIcon={() => <Icon/Image/AnyComponent name="home" />}
      //... Other Props
    />
    ```

- `leftIconOnPress`: Function to call when the left icon is pressed.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      leftIconOnPress={() => console.log("Left icon pressed")}
      //... Other Props
    />
    ```

- `rightIcon`: Name of the right icon (Icon used: react-native-vector-icons/FontAwesome).

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      rightIcon="settings"
      //... Other Props
    />
    ```

- `rightIconColor`: Color of the right icon.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      rightIconColor="green"
      //... Other Props
    />
    ```

- `rightIconStyle`: Style object for the right icon.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      rightIconStyle={{ size: 20 }}
      //... Other Props
    />
    ```

- `rightIconContainerStyle`: Style object for the right icon container.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      rightIconContainerStyle={{ padding: 10 }}
      //... Other Props
    />
    ```

- `renderRightIcon`: Function to render a custom right icon.

  - Usage:

    ```tsx
    import Icon/Image/AnyComponent from 'npm-package or local directory'

    <FormInput
      //.... Other Props
      renderRightIcon={() => <Icon/Image/AnyComponent name="home" />}
      //... Other Props
    />
    ```

- `rightIconOnPress`: Function to call when the right icon is pressed.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      rightIconOnPress={() => console.log("Right icon pressed")}
      //... Other Props
    />
    ```

- `hiddenText`: Boolean to hide the text input (for password fields).

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      hiddenText={true}
      //... Other Props
    />
    ```

- `disabled`: Boolean to disable the input field and the datepicker functionality (if datepickerMode is set to true).

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      disabled={true}
      //... Other Props
    />
    ```

## Date Picker Props

These are the date picker props (Important & useful props are shown first and are in bold) [All props are optional. ***For datepicker to work, you need to give the datepicker prop.***]:

- **_`datePicker`_**: Boolean to enable the date picker functionality.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      datePicker={true}
      //... Other Props
    />
    ```

- **`datePickerWithTime`**: Boolean to include time in the date picker. **It will only work in datePickerMode="single"**.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      datePickerWithTime={true}
      //... Other Props
    />
    ```

- **`datePickerMode`**: Mode of the date picker (e.g., 'single', 'range', 'multiple').

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      datePickerMode="multiple" // Default is single
      //... Other Props
    />
    ```

- **`initialDate`**: Initial date for the date picker. (For datePickeMode: **single**)

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      initialDate={new Date()}
      //... Other Props
    />
    ```

- **`initialRange`**: Initial date range for the date picker. (For datePickeMode: **range**)

  - Usage:

    ```tsx
    // Example range of 1 day
    const initialStartDate = new Date();
    const initialEndDate = new Date(new Date().setDate(new Date().getDate() + 1));

    <FormInput
      //.... Other Props
      initialRange={startDate: initialStartDate, endDate: initialEndDate}
      //... Other Props
    />
    ```

- **`initialDates`**: Initial dates for the date picker. (For datePickeMode: **multiple**)

  - Usage:

    ```tsx
    const date_1 = new Date();
    const date_2 = new Date(new Date().setDate(new Date().getDate() + 1));
    const date_3 = new Date(new Date().setDate(new Date().getDate() + 5));

    <FormInput
      //.... Other Props
      initialDates={[date_1, date_2, date_3]}
      //... Other Props
    />;
    ```

- **`onDateChange`**: Function to call when the date changes. (For datePickeMode: **single**)

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      onDateChange={(date: Date) => console.log(date)} // You will get the Date Object in 'date' variable
      //... Other Props
    />
    ```

- **`sendDateValue`**: Function to call with the selected date value. (For datePickeMode: **single**)

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      sendDateValue={(dateValue) => console.log(dateValue)} // You will get date value as string in 'DD-MM-YYYY' format ('DD-MM-YYYY hh:mm:ss AM/PM' format for dateTimePicker) or any other format you specified in dateFormat prop
      //... Other Props
    />
    ```

- **`onDateRangeChange`**: Function to call when the date range changes. (For datePickeMode: **range**)

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      onDateRangeChange={({ startDate, endDate }) => {
        console.log("Start Date: ", startDate);
        console.log("End Date: ", endDate);
      }} // You will get the Date Objects in 'startDate' and 'endDate' variables
      //... Other Props
    />
    ```

- **`sendDateRangeValues`**: Function to call with the selected date range values. (For datePickeMode: **range**)

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      sendDateRangeValues={(startDate, endDate) => {
        console.log("Start Date: ", startDate);
        console.log("End Date: ", endDate);
      }} // You will get date values as strings in 'DD-MM-YYYY' format or any other format you specified in dateFormat prop
      //... Other Props
    />
    ```

- **`onDatesChange`**: Function to call when the dates change. (For datePickeMode: **multiple**)

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      onDatesChange={(dates) => console.log(dates);} // You will get the Date Objects as an array.
      //... Other Props
    />
    ```

- **`sendDatesValues`**: Function to call with the selected dates values. (For datePickeMode: **multiple**)

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      sendDatesValues={(dates) => {console.log(dates)} // You will get date values as array of strings in 'DD-MM-YYYY' format or any other format you specified in dateFormat prop
      //... Other Props
    />
    ```

- **`datePlaceholder`**: Placeholder text for the date picker. (If you don't give this prop, the selected date will show.)

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      datePlaceholder="Select Date of Birth"
      //... Other Props
    />
    ```

- `disableFutureDates`: Boolean to disable future dates in the date picker.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      disableFutureDates={true}
      //... Other Props
    />
    ```

- `disablePastDates`: Boolean to disable past dates in the date picker.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      disablePastDates={true}
      //... Other Props
    />
    ```

- `datePickerBackgroundColor`: Background color for the date picker.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      datePickerBackgroundColor="red"
      //... Other Props
    />
    ```

- `showDatePickerCloseButton`: Boolean to show the close button in the date picker.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      showDatePickerCloseButton={true} // Default is false
      //... Other Props
    />
    ```

- `datePickerCloseButtonColor`: Color of the close button in the date picker.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      datePickerCloseButtonColor="blue"
      //... Other Props
    />
    ```

- `selectedItemColor`: Color of the selected item in the date picker.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      selectedItemColor="yellow"
      //... Other Props
    />
    ```

- `selectedTextStyle`: Style object for the selected text in the date picker.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      selectedTextStyle={{ fontWeight: "400" }}
      //... Other Props
    />
    ```

- `firstDayOfWeek`: First day of the week in the date picker.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      firstDayOfWeek={0} // Set the first day of week as number. (i.e. 0 is Sunday, 1 is Monday,.. etc.). Default is 1 (Monday)
      //... Other Props
    />
    ```

- `headerTextContainerStyle`: Style object for the header text container in the date picker.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      headerTextContainerStyle={{ borderRadius: 5 }}
      //... Other Props
    />
    ```

- `datePickerAnimationType`: Animation type for the date picker (e.g., 'zoomIn', 'slideUp', 'slideDown', slideLeft', 'slideRight', 'none').

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      datePickerAnimationType="slideDown" // Default is zoomIn
      //... Other Props
    />
    ```

- `animationDuration`: Custom animation duration for the transition of date picker modal.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      animationDuration={300} // Default is 400 (400 ms)
      //... Other Props
    />
    ```

- `hideDatePickerConfirmButton`: Boolean to hide the date picker confirm button.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      hideDatePickerConfirmButton={true} // Default is false
      //... Other Props
    />
    ```

- `dateFormat`: Custom format for the date / date range / dates.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      dateFormat="DD/MM/YYYY" // Default is 'DD-MM-YYYY'
      //... Other Props
    />
    ```

- `dateTimeFormat`: Custom format for the date and time for single date if datePickerWithTime is selected.

  - Usage:

    ```tsx
    <FormInput
      //.... Other Props
      dateTimeFormat="DD/MM/YYYY HH/MM/SS" // Default is 'DD-MM-YYYY hh:mm:ss AM/PM'
      //... Other Props
    />
    ```

## Changelog

### [1.5.0] - 2024-06-13
#### Added
- `inputContainerBackgroundColor` prop: This new prop allows you to customize the background color of the input container. You can pass any valid color string as the value.
- Disabled functionality for the datepicker: The datepicker can now be disabled, preventing user interaction. This can be controlled via the `disabled` prop. When `disabled` is set to `true`, the datepicker will be non-interactive.
<!-- 
#### Changed
- (Include any changes in existing functionality) -->

<!-- #### Deprecated
- (Include any features that were removed or will be removed in future versions) -->

<!-- #### Fixed
- (Include any bug fixes)

#### Security
- (Include any security updates) -->
