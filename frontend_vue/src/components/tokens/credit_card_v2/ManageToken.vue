<template>
	<div v-if="!tokenInfo">Error loading</div>
	<TokenDisplay v-else :token-data="tokenInfo" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TokenDisplay from './TokenDisplay.vue';
import type { ManageTokenBackendType } from '@/components/tokens/types.ts';

const props = defineProps<{
	tokenData: ManageTokenBackendType;
}>();

// TODO: these fields are coming empty from the backend
// const tokenData = ref({
// 	name_on_card: props.tokenData.name_on_card || 'Paul Ndegwa Gichuki',
// 	card_number: props.tokenData.card_number || '0000 0000 0000 0000 0000',
// expiry_month: props.tokenData.expiry_month || '11',
// expiry_year: props.tokenData.expiry_year || '27',
// 	cvv: props.tokenData.cvv || '344',
// });

const tokenInfo = ref({
	name_on_card: 'Paul Ndegwa Gichuki',
	card_number:'0000 0000 0000 0000',
	expiry_month: '11',
	expiry_year: '27',
	cvv: '344',
});
</script>
