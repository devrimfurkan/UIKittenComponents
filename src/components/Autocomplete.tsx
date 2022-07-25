import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Autocomplete, AutocompleteItem, Icon } from '@ui-kitten/components';

const movies = [
  { title: 'Star Wars' },
  { title: 'Back to the Future' },
  { title: 'The Matrix' },
  { title: 'Inception' },
  { title: 'Interstellar' },
];

const filter = (item:any, query:any) => item.title.toLowerCase().includes(query.toLowerCase());

const StarIcon = (props:any) => (
  <Icon {...props} name='star'/>
);

export default function AutocompleteAccessoriesShowcase  (){

  const [value, setValue] = React.useState("");
  const [data, setData] = React.useState(movies);

  const onSelect = (index:any) => {
    setValue(data[index].title);
  };

  const onChangeText = (query:any) => {
    setValue(query);
    setData(movies.filter(item => filter(item, query)));
  };

  const clearInput = () => {
    setValue('');
    setData(movies);
  };

  const renderOption = (item:any, index:any) => (
    <AutocompleteItem
      key={index}
      title={item.title}
      accessoryLeft={StarIcon}
    />
  );

  const renderCloseIcon = (props:any) => (
    <TouchableWithoutFeedback onPress={clearInput}>
      <Icon {...props} name='close'/>
    </TouchableWithoutFeedback>
  );

  return (
    <Autocomplete
      placeholder='Place your Text'
      value={value}
      accessoryRight={renderCloseIcon}
      onChangeText={onChangeText}
      onSelect={onSelect}>
      {data.map(renderOption)}
    </Autocomplete>
  );
};