<template>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>autoId</th>
                <th>title</th>
                <th>referredBy</th>
                <th>firstName</th>
                <th>lastName</th>
                <th>initials</th>
                <th>contactNo</th>
                <th>email</th>
                <th>paymentProvider</th>
                <th>accountNumber</th>
                <th>accountName</th>
                <th>accountType</th>
                <th>isAdmin</th>
                <th>wiseAccount</th>
                <th>agreementDate</th>
                <th>openChatLink</th>
                <th>userProfileLink</th>
                <th>password</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="content in users" :key="content.id">
                <td>{{ content.id }}</td>
                <td>{{ content.autoId }}</td>
                <td>{{ content.title }}</td>
                <td>{{ content.referredBy }}</td>
                <td>{{ content.firstName }}</td>
                <td>{{ content.lastName }}</td>
                <td>{{ content.initials }}</td>
                <td>{{ content.contactNo }}</td>
                <td>{{ content.email }}</td>
                <td>{{ content.paymentProvider }}</td>
                <td>{{ content.accountNumber }}</td>
                <td>{{ content.accountName }}</td>
                <td>{{ content.accountType }}</td>
                <td>{{ content.isAdmin }}</td>
                <td>{{ content.wiseAccount }}</td>
                <td>{{ content.agreementDate }}</td>
                <td>{{ content.openChatLink }}</td>
                <td>{{ content.userProfileLink }}</td>
                <td>{{ content.password }}</td>
            </tr>
        </tbody>
    </table>

</template>

<script setup>
let users = ref([]);

onMounted(async() => {
    const response = await $fetch("/api/users");
    console.log(response.users);
    users.value = response.users;
});
</script>