export default {
  header: 'Date/month picker',
  headerText: 'The `v-date-picker` is stand-alone component that can be utilized in many existing Vuetify components. It offers the user a visual representation for selecting date/month.',
  components: ['v-date-picker'],
  examples: [{
    dateLight: {
      header: 'Date pickers',
      desc: 'Date pickers come in two orientation variations, portrait **(default)** and landscape.'
    },
    dateColorable: {
      header: 'Date pickers - Colors',
      desc: 'Date picker colors can be set using the `color` and `header-color` props. If `header-color` prop is not provided header will use the `color` prop value.'
    },
    dateDialogAndMenu: {
      header: 'Date pickers - In dialog and menu',
      desc: 'When integrating a picker into a `v-text-field`, it is recommended to use the **readonly** prop. This will prevent mobile keyboards from triggering. To save vertical space, you can also hide the picker title.  \n\n  Pickers expose a scoped slot that allow you to hook into save and cancel functionality. This will maintain an old value which can be replaced if the user cancels.'
    },
    dateAllowedDates: {
      header: 'Date pickers - Allowed dates',
      desc: 'You can specify allowed dates using arrays, objects, and functions.'
    },
    dateWidth: {
      header: 'Date pickers - Setting picker width',
      desc: 'You can specify allowed the picker\'s width or make it full width.'
    },
    dateBirthday: {
      header: 'Date pickers - birthday picker',
      desc: 'Starting with year picker by default, resticting dates range and closing the picker menu after selecting the day make the perfect birthday picker.'
    },
    datePickerDate: {
      header: 'Date pickers - react to disaplyed month/year change',
      desc: 'You can watch the `pickerDate` which is the displayed month/year (depending on the picker type and active view) to perform some action when it changes.'
    },
    dateEvents: {
      header: 'Date pickers - Events',
      desc: 'You can specify events using arrays, objects, and functions. To change the default color of the event use **event-color** prop.'
    },
    dateInternationalization: {
      header: 'Date pickers - Internationalization',
      desc: 'The date picker supports internationalization through the JavaScript Date object. Specify a BCP 47 language tag using the `locale` prop, and then set the first day of the week with the `first-day-of-week` prop.'
    },
    dateIcons: {
      header: 'Date pickers - icons',
      desc: 'You can override the default icons used in the picker.'
    },
    dateReadonly: {
      header: 'Date pickers - read only',
      desc: 'Selecting new date could be disabled by adding **readonly** prop.'
    },
    dateCurrent: {
      header: 'Date pickers - current date indicator',
      desc: 'By default the current date is displayed using outline button - **show-current** prop allows you to remove the border or select different date to be displayed as the current one.'
    },
    monthLight: {
      header: 'Month pickers',
      desc: 'Month pickers come in two orientation variations, portrait **(default)** and landscape.'
    },
    monthColorable: {
      header: 'Month pickers - Colors',
      desc: 'Month picker colors can be set using the `color` and `header-color` props. If `header-color` prop is not provided header will use the `color` prop value.'
    },
    monthDialogAndMenu: {
      header: 'Month pickers - In dialog and menu',
      desc: 'When integrating a picker into a `v-text-field`, it is recommended to use the **readonly** prop. This will prevent mobile keyboards from triggering. To save vertical space, you can also hide the picker title. \n\n Pickers expose a scoped slot that allow you to hook into save and cancel functionality. This will maintain an old value which can be replaced if the user cancels.'
    },
    monthAllowedMonths: {
      header: 'Month pickers - Allowed months',
      desc: 'You can specify allowed months using arrays, objects, and functions.'
    },
    monthWidth: {
      header: 'Month pickers - Setting picker width',
      desc: 'You can specify allowed the picker\'s width or make it full width.'
    },
    monthInternationalization: {
      header: 'Month pickers - Internationalization',
      desc: 'The month picker supports internationalization through the JavaScript Date object. Specify a BCP 47 language tag using the `locale` prop, and then set the first day of the week with the `first-day-of-week` prop.'
    },
    monthIcons: {
      header: 'Month pickers - icons',
      desc: 'You can override the default icons used in the picker.'
    },
    monthReadonly: {
      header: 'Month pickers - read only',
      desc: 'Selecting new date could be disabled by adding **readonly** prop.'
    },
    monthCurrent: {
      header: 'Month pickers - current month indicator',
      desc: 'By default the current month is displayed using outline button - **show-current** prop allows you to remove the border or select different month to be displayed as the current one.'
    }
  }],
  props: {
    'v-date-picker': {
      type: 'Determines the type of the picker - `date` for date picker, `month` for month picker',
      monthFormat: 'Formatting function used for displaying months in the months table. Called with date (ISO 8601 string) and locale (string) arguments.',
      allowedDates: 'Restricts which dates can be selected',
      eventColor: 'Sets the color for event dot. It can be string (all events will have the same color) or `object` where attribute is the event date and value is the color for specified date or `function` taking date as a parameter and returning color for that date',
      events: 'Marks the date as an event (only for date picker)',
      locale: 'Sets the locale. Accepts a string with a BCP 47 language tag.',
      firstDayOfWeek: 'Sets the first day of the week, starting with 0 for Sunday.',
      titleDateFormat: 'Allows you to customize the format of the date string that appears in the title of the date picker. Called with date (ISO 8601 string) and locale (string) arguments.',
      headerDateFormat: 'Allows you to customize the format of the month string that appears in the header of the calendar. Called with date (ISO 8601 string) and locale (string) arguments.',
      yearFormat: 'Allows you to customize the format of the year string that appears in the header of the calendar. Called with date (ISO 8601 string) and locale (string) arguments.',
      dayFormat: 'Allows you to customize the format of the day string that appears in the date table. Called with date (ISO 8601 string) and locale (string) arguments.',
      yearIcon: 'Generates an icon next to the year',
      min: 'Minimum allowed date/month',
      max: 'Maximum allowed date/month',
      pickerDate: 'Displayed year/month',
      appendIcon: 'Sets the icon for next month/year button',
      prependIcon: 'Sets the icon for previous month/year button',
      readonly: 'Makes the picker readonly (doesnt\'t allow to select new date or navigate through months/years)',
      scrollable: 'Allows changing displayed month with mouse scroll',
      showCurrent: 'Toggles visibility of the current date/month outline or shows the provided date/month as a current'
    }
  }
}
