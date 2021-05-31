import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from '@shopify/restyle';

import { Theme } from '../../../theme';
import { BaseButton, Text } from '../Base';

type Props = {
    label: string;
    isLoading?: boolean;
    onPress: () => void;
}
const Button: React.FC<Props> = ({ label, isLoading, onPress }: Props) => {

    const theme = useTheme<Theme>();

    return (
        <BaseButton
            backgroundColor="accent-blue"
            padding="s"
            borderRadius="l"
            width={328}
            height={48}
            flexGrow={0}
            alignItems="center"
            justifyContent="center"

            onPress={onPress}
            activeOpacity={0.7}
        >
            {
                isLoading ?
                    <ActivityIndicator testID="loading" color={theme.colors.white} />
                    : <Text
                        color="white"
                        fontWeight="700"
                    >
                        {label}
                    </Text>
            }
        </BaseButton>
    );
}

export default Button;