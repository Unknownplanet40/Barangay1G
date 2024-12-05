<template></template>
<template>
    <div>
        <b-modal size="lg" :id="modalId" @hide="resetForm" title="Conversation">
            <b-form @submit.prevent="handleReply">
                <b-row>
                    <b-col
                        v-for="message in messages"
                        :key="message.id"
                        cols="12"
                    >
                        <b-card
                            :class="{
                                'text-left': message.role === 'resident',
                                'text-right': message.role === 'official',
                                'border-left': message.role === 'resident',
                                'border-right': message.role === 'official',
                            }"
                            :style="{
                                borderLeftColor:
                                    message.role === 'resident' ? 'blue' : '',
                                borderRightColor:
                                    message.role === 'official' ? 'green' : '',
                                borderLeftWidth:
                                    message.role === 'resident' ? '5px' : '',
                                borderRightWidth:
                                    message.role === 'official' ? '5px' : '',
                                borderRadius:
                                    message.role === 'resident'
                                        ? '10px 0 0 10px'
                                        : '0 10px 10px 0',
                            }"
                        >
                            <b-card-text>
                                <strong
                                    >{{ message.sender.name }} (
                                    {{ message.role }} ):</strong
                                >
                                {{ message.content }}
                            </b-card-text>
                            <b-card-text>
                                <small class="text-muted">{{
                                    message.created_at | date_time
                                }}</small>
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12">
                        <b-form-group label="Reply">
                            <b-form-textarea
                                v-model="replyContent"
                                rows="3"
                            ></b-form-textarea>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12">
                        <b-button type="submit" variant="primary"
                            >Send Reply</b-button
                        >
                    </b-col>
                </b-row>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
export default {
    props: {
        messages: {
            type: Array,
            required: true,
            validator(value) {
                return value.every((item) => typeof item === "object");
            },
        },
        action: {
            type: String,
            required: true,
        },
        modalId: {
            type: String,
            required: true,
        },
        errors: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            replyContent: "",
        };
    },
    methods: {
        handleReply() {
            this.$emit("reply", this.replyContent);
            this.replyContent = "";
        },
        resetForm() {
            this.replyContent = "";
        },
    },
};
</script>
