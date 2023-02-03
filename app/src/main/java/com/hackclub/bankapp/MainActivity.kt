package com.hackclub.bankapp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Divider
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.hackclub.bankapp.ui.theme.BankAppTheme
import com.hackclub.bankapp.ui.theme.BlueButton
import com.hackclub.bankapp.ui.theme.GreyText
import com.hackclub.bankapp.ui.theme.RedText

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            LoginPage()
        }
    }
}

@Composable
fun LoginHeader(modifier: Modifier = Modifier) {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center,
        modifier = Modifier
    ) {
        Text(
            text = "LOGIN IN TO",
            color = GreyText,
            modifier = modifier.padding(vertical = 10.dp),
            fontSize = 16.sp
        )
        Text(
            text = "Hack Club Bank",
            color = RedText,
            modifier = modifier,
            fontSize = 30.sp
        )
        Divider(
            color = GreyText,
            thickness = 0.5.dp,
            modifier = modifier.padding(top = 2.dp, bottom = 20.dp)
        )
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun EmailInput(modifier: Modifier = Modifier) {
    var text = ""
    TextField(text, { text = it }, label = { Text("Enter your email...") })
}

@Composable
fun ContinueButton(modifier: Modifier = Modifier, backGroundColor: Color? = BlueButton) {
    Column(modifier = Modifier.padding(top = 30.dp, start = 90.dp)) {
        Button(onClick = {}) {
            Text("Continue")
        }
    }
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    LoginPage()
}

@Composable
fun LoginPage() {
    BankAppTheme {
        Column(modifier = Modifier.padding(horizontal = 50.dp, vertical = 250.dp)) {
            LoginHeader()
            EmailInput()
            ContinueButton()
        }
    }
}