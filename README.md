# Starting the app
After installing the necessary packages, the project can be started by running npm start

## Functionality of the application

1) Typescript used with the required basic typing in place.
2) Application displaying mock data.
3) Data searchable by first and/or last name.
4) Users selectable.
5) All selected users can be hidden or shown by toggling the toolbar checkbox.
6) Correct count of selected items shown when taking into account all possible scenarios

## Notes

There is a lot of props drilling whick would not be the case if Context or something like Reactive variables are used. 
I was reluctant to change the structure of the all but things can be improved so there is not need to pass data up as it is done at present.
Only types are used as there is no data that is complex enough so interfaces are requred.

