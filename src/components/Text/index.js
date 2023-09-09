import { View, Text } from 'react-native'
import React from 'react'
import { appStyles } from '../../services/utilities/appStyles'
export default function CustomText() {
  return (
    <View style={appStyles.policycontainer}>
              <Text style={appStyles.policytxt}>Integer at faucibus urna.Nullam condimentum leo
                id elit sagittis auctor. Curabitur elementum nunc a
                leo imperdiet, nec elementum diam elementum.
                Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur.
                Mauris a accumsan mauris.{'\n'}{'\n'}
                Phasellus egestas et risus sit amet hendrerit.
                Nulla facilisi. Cras urna sem, vulputate sed condimentum a,
                posuere vel enim.{'\n'}{'\n'}Integer at faucibus urna. Nullam
                condimentum leo id elit sagittis auctor. Curabitur elementum nunc a
                leo imperdiet, nec elementum diam elementum. Etiam elementum euismod
                commodo.{'\n'}{'\n'}Proin eleifend eget quam ut efficitur. Mauris a
                accumsan mauris. Phasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem,
                vulputate sed condimentum a, posuere vel enim.{'\n'}{'\n'}
                Integer at faucibus urna. Nullam condimentum leo id elit sagittis
                auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam
                elementum. Etiam elementum euismod commodo. Proin eleifend eget quam
                ut efficitur. Mauris a accumsan mauris.{'\n'}{'\n'}Phasellus egestas
                et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim. </Text>
            </View>
  )
}