import 'package:animated_splash_screen/animated_splash_screen.dart';
import 'package:e_ticket/screens/login.dart';
import 'package:flutter/material.dart';


void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        home: AnimatedSplashScreen(
            duration: 3000,
            splash: Icons.book_online,
            nextScreen: const LoginScreen(),
            splashTransition: SplashTransition.fadeTransition,
            backgroundColor: Colors.green));
  }
}

