//
//  ContentView.swift
//  bank
//
//  Created by Andrew Nijmeh on 2023-01-05.
//

import SwiftUI

struct ContentView: View {
    @State private var emailAddress = ""
    var body: some View {
        VStack {
            Image(systemName: "globe")
                .imageScale(.large)
                .foregroundColor(.accentColor)
            Text("LOGIN IN TO")
            Text("HacK Club Bank")
            TextField("Enter Your Email", text: $emailAddress)
                .textFieldStyle(.roundedBorder)
                .padding()
            
            Button("Continue") {
                print("Hack Club Bank")
            }
            .buttonStyle(.bordered)
            .tint(.blue)
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
