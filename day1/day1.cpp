#include <iostream>
#include <fstream>
#include <vector>

using namespace std;

int main() {
    
    ifstream file;
    file.open("day1.txt");

    vector<string> contents;
    string line;

    while (!file.eof()) {
        getline(file, line);
        contents.push_back(line);
    }
    
    file.close();

}
