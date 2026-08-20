import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name='index'>
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon src={require("@/assets/images/tabIcons/home.png")} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name='done'>
        <NativeTabs.Trigger.Label>Feitas</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon src={require("@/assets/images/tabIcons/explore.png")}/>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}