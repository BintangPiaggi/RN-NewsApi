import React from 'react';
import { View, Linking, TouchableNativeFeedback } from 'react-native';
import { Text, Button, Card, Divider,Header } from 'react-native-elements';
import moment from 'moment';


export default class Article extends React.Component {
  render() {
    const {
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      url
    } = this.props.article;
    const { noteStyle, featuredTitleStyle } = styles;
    const time = moment(publishedAt || moment.now()).fromNow();
    const defaultImg ='data:image/jpeg;base64,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'
   
    return (
      <TouchableNativeFeedback
        useForeground
        onPress={() => Linking.openURL(url)}
      >
        <Card
          featuredTitle={title}
          featuredTitleStyle={featuredTitleStyle}
          image={{
            uri: urlToImage || defaultImg
          }}
        >
          <Text style={{ marginBottom: 10 }}>
            {description || 'Read More..'}
          </Text>
          <Divider style={{ backgroundColor: '#dfe6e9' }} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={noteStyle}>{source.name.toUpperCase()}</Text>
            <Text style={noteStyle}>{time}</Text>
          </View>
        </Card>
      </TouchableNativeFeedback>
    );
  }
}

const styles = {
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 15
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  }
};